SARAH-Plugin-cubecanalplus
==========================

plugin pour sarah qui controle le cube hd wifi de canalsat

il fonctionne avec un script en .sh donc il faut instaler cygwin pour que le plugin fonctionne.
metre le upnp.sh dan le repertoir bin de cygwin
et metre le repertoir bin de cygwin dans le path de windows tuto= http://sametmax.com/ajouter-un-chemin-a-la-variable-denvironnement-path-sous-windows/


 On note l’uuid qui est dans ce fichier xml : http://192.168.1.19:49152/stbdevice.xml (si 192.168.1.19 est l’adresse IP de votre Cube aussi !). Toutes les commandes ci-dessous en ont besoin.

On « Pair » son Canalsat avec son PC/Server avec cette commande (en utilisant le script en 2):

./upnp.sh votre ip:49152/RegistrationService/control/ urn:schemas-nds-com:service:Registration:1#RequestPairing ‘<uuid>uuid:votre uuid</uuid>’

et la commande ou on doit inserer le code qui est afficher sur l'ecran du cube

./upnp.sh votre ip:49152/RegistrationService/control/ urn:schemas-nds-com:service:Registration:1#RegisterSmartPhone ‘<uuid>uuid:votre uuid</uuid><pairingData>votre code</pairingData>’

voila 



commande cube avec des des clés

./upnp.sh votre ip:49152/RemoteControlService/control/ urn:schemas-nds-com:service:Remote-Control:1#SendKey ‘<uuid>uuid:votre uuid</uuid><key>votre clé pour la commande</key>’

vous devez changer l ip le uuid avec celle de votre cube et la key de votre commande




Haut : 57600
Bas: 57601
Gauche : 57602
Droite: 57603
Ok: 57345
retour: 57346
Sortie : 57357
Menu: 61184
Guide: 57355
Info: 61185
V+ : 57347
V- : 57348
Mute : 57349
P+ : 57350
P- : 57351

1: 58113
2: 58114
3: 58115
4: 58116
5: 58117
6: 58118
7: 58119
8: 58120
9: 58121
0: 58112

Play: 58368
Pause: 58369
Forward: 58372
Rewind: 58374

commande chaine avec locator
ici la commande locator
elle va pèrmetre de récupérer le locator
./upnp.sh votre ip:49152/ChannelSelectionService/control/ urn:schemas-nds-com:service:Channel-Selection:1#GetSelectedChannel '<uuid>uuid:votre uuid</uuid>'


ici la commande d'une chaine avec le locator tout fraichement récupérer 

./upnp.sh votre ip:49152/ChannelSelectionService/control/ 'urn:schemas-nds-com:service:Channel-Selection:1#SetSelectedChannel <uuid>uuid:votre uuid</uuid><channelListId>3d0a2a1</channelListId><locator>dvb://1.442.2329</locator><channelNumber>1</channelNumber>'

chaque chaine on un locator ici c'est dvb://1.44.2329  qui ici donne la chaine 1


