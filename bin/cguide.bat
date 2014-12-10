@rem file: /cygwin.bat
@rem ===============================
C:
chdir C:/cygwin64/bin
set HOME=\cygwin\home\yap
set _YAP_CYGWIN=true
bash --login -i /cygdrive/c/cygwin64/bin/upnp.sh "192.168.1.19:49152/RemoteControlService/control/ urn:schemas-nds-com:service:Remote-Control:1#SendKey <uuid>uuid:DEADBEEF-2f2d-eb5C-5b9B-fc8e7edf863e</uuid><key>57355</key>"
@rem ===============================