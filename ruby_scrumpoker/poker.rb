# frozen_string_literal: true
require 'socket'
require_relative 'config.rb'

# :)
class Array
  def second
    return self[1]
  end
end

module ScrumPoker

  class PokerServer
    def initialize(new_size)
      @voting = {
        size: new_size.to_i,
        votes_members: { '1' => [], '2' => [], '3' => [], '5' => [], '8' => [] },
        votes_counter: 0
      }
      init_voting_thread
    end

    def init_voting_thread
      server = TCPServer.new(HOSTNAME, PORT)
      puts "Poker started now"
      voting_listen(server)
    end

    private
    def voting_listen(server)
      loop do
        socket = server.accept
        request = socket.gets
        response = handle_request(request)
        puts response
        socket.print "HTTP/1.1 200 OK\r\n" +
                    "Content-Type: text/plain\r\n" +
                    "Content-Length: #{response.bytesize}\r\n" +
                    "Connection: close\r\n"
        socket.print "\r\n"
        socket.print response
        socket.close
        break if response.start_with?('Final')
      end
      rescue Interrupt => intr
        puts 'Keyboard Interrupt, exiting...'
        exit 0
    end

    def handle_request(req)
      method, body, protocol = req.split(' ')
      
      if @voting[:votes_counter] <= @voting[:size] and method == 'POST'
        handle_member_vote(body)
        
        return close_voting if (@voting[:size] == @voting[:votes_counter])
        
        return show_progress_bar
      else
        return "No voting in progress or malformed vote request"
      end
    end
    
    def handle_member_vote(data)
      data = data.gsub('/',' ').split(' ')
      member = data.second
      vote_value = data.last
      @voting[:votes_counter] += 1
      @voting[:votes_members][vote_value].push(member)
    end
    
    def close_voting
      res = String.new
      res += 'Final note: '
      maxval = @voting[:votes_members].values.map(&:length)
      maxvalindex = maxval.index(maxval.max)
      res += (@voting[:votes_members].keys[maxvalindex] + "\r\n")
      for val in @voting[:votes_members].keys
        val_status = "#{val} | #{@voting[:votes_members][val].empty? ? '-' : @voting[:votes_members][val].join(', ')}"
        res += (val_status + "\r\n")
      end
      res
    end

    def show_progress_bar
      pb = String.new
      pb += "["
      pb += ('#' * 3*@voting[:votes_counter])
      pb += (' ' * 3*(@voting[:size] - @voting[:votes_counter]))
      pb += "]  [#{@voting[:votes_counter]} out of #{@voting[:size]} votes added]\r\n"
      pb
    end

  end


  class PokerClient
    def initialize
      parse_args
    rescue StandardError => err
      puts err, "See 'poker --help'"
    end

    private
    def parse_args
      show_help and return if ARGV.first == '--help'
      raise StandardError.new('Wrong number of arguments') if ARGV.length != 2
      raise StandardError.new('Wrong argument format') unless %w|start vote|.include?(ARGV.first)

      case ARGV.first
      when 'start'
        host_a_voting(ARGV.last)
        return
      when 'vote'
        post_a_vote(ARGV.last)
        return
      end

    end

    def host_a_voting(voting_size)
      raise StandardError.new('Incorect number of participants') if voting_size.to_i.nil? or voting_size.to_i < 1

      return PokerServer.new(voting_size)
    end

    def post_a_vote(vote_value)
      raise StandardError.new('Incorect vote value') unless [1, 2, 3, 5, 8].include?(vote_value.to_i)
      
      post_target = "#{PROTOCOL}://#{HOSTNAME}:#{PORT}"
      username = `whoami`.chop
      system "curl -X POST #{post_target}/vote/#{username}/#{vote_value}"
    end

    def show_help
      puts "
        Start a voting: $ poker start [MEMBER_COUNT]
        Post a vote:    $ poker vote [VOTE_VALUE]
        Acceptable vote values: 1, 2, 3, 5, 8
      "
      true
    end

  end

end

ScrumPoker::PokerClient.new
