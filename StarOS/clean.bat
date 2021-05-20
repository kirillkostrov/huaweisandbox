@ECHO OFF
IF %1.==. GOTO NoParam

Echo removing MacOS artefacts
del /s /q .DS_Store 
adb disconnect
adb connect %1
adb remount
adb root
adb shell rm /data/local/clean.sh
adb push clean.sh /data/local
adb shell chmod +x /data/local/clean.sh
adb shell /data/local/clean.sh

echo cleaning Apps cache
adb shell pm clear ru.sberdevices.starlauncher
adb shell pm clear ru.sberdevices.app.setup
adb shell pm clear ru.sberdevices.videos
adb shell pm clear ru.sberdevices.videoplayer
adb shell pm clear ru.sberdevices.music
adb shell pm clear ru.sberdevices.services
adb shell pm clear ru.sberdevices.assistant
adb shell pm clear ru.sberdevices.startube

adb shell reboot

GOTO End1


:NoParam
@ECHO Use ip address as a parameter, like clean.bat 192.168.1.200

:End1