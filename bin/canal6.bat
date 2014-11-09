@rem file: /cygwin.bat
@rem ===============================
C:
chdir C:/cygwin64/bin
set HOME=\cygwin\home\yap
set _YAP_CYGWIN=true
bash --login -i /cygdrive/c/cygwin64/bin/upnp.sh "192.168.1.19:49152/ChannelSelectionService/control/ urn:schemas-nds-com:service:Channel-Selection:1#SetSelectedChannel <uuid>uuid:DEADBEEF-2f2d-eb5C-5b9B-fc8e7edf863e</uuid><channelListId>3d0a2a1</channelListId><locator>dvb://1.440.245e</locator><channelNumber>6</channelNumber>"
@rem ===============================