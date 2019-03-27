import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.SocketTimeoutException;
import java.util.Arrays;

public class Main {
    private static int appPort(){
        // GLOBAL SETTINGS FOR APPLICATION PORT
        int port = 4000;
        return port;
    }

    public static void main(String[] args) {
        System.out.println("Starting the server!");
        try (ServerSocket server = new ServerSocket(appPort())) {
            server.setSoTimeout(1000);
            while (true) {
                try (Socket s = server.accept()) {
                    try (InputStream input = s.getInputStream(); OutputStream output = s.getOutputStream()){
                        byte[] handleBuffer = new byte[100000];
                        int totalBytes = input.read(handleBuffer);
                        String req = new String(Arrays.copyOfRange(handleBuffer, 0, totalBytes));
                        System.out.println("Connected client, request:");
                        System.out.println(req);

                        String protocol = "HTTP/1.1 ";
                        String status = "200 OK ";
                        String separate = "\r\n\r\n";
                        String responseBody = "<html><center>AYY LMAO</center><html>";
                        String res = protocol + status + separate + responseBody;

                        output.write(res.getBytes());
                    }
                } catch (SocketTimeoutException ste) {
                    if (Thread.currentThread().isInterrupted()) {
                        break;
                    }
                }
            }
        }
        catch (Exception e){
            System.out.println("Exception raised: " + e);
        }
    }
}
