## ScrumPoker Client/Server

How does one runeth it?
1. `chmod +x poker`
2. `./poker start [voter count]` - start a voting as server
3. `./poker vote [vote value]` - posting a vote
4. ruby -v: `ruby 2.4.4p296 (2018-03-28 revision 63013) [x86_64-darwin18]`
5. Alternatively, run `ruby poker.rb ARGS` without need for `chmod`

TODO:
- [ ] Inputting your username (now it's `whoami` result)
- [ ] Handling errors with proper response codes
- [ ] Probably more...