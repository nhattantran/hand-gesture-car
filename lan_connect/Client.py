import socket, serial

port = '/dev/ttyACM0'
baudrate = 19200

ser = serial.Serial(port, baudrate)

HOST = '192.168.1.14'  # Standard loopback interface address (localhost)
PORT = 65432  # Port to listen on (non-privileged ports are > 1023)

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    print('Waiting for connection from client')
    s.bind((HOST, PORT))
    s.listen(5)
    conn, addr = s.accept()
with conn:
    print('Connected by', addr)
    while True:
        data = conn.recv(1024)
        print("Received data: ", data.decode())
        ser.write(data)
