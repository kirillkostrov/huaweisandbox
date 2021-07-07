@ECHO OFF
IF %1.==. GOTO NoParam

adb disconnect
adb connect %1:5555
adb remount
adb shell mount -o remount,rw /version

echo waiting for remount
timeout 3

echo Proceed to write /hw_product/bin/
pause

adb push app/GamepadServiceTv/. /version/cust/app/GamepadServiceTv/
adb push app/StarAssistantTv/. /version/cust/app/StarAssistantTv/
adb push app/StarCrashReporterTv/. /version/cust/app/StarCrashReporterTv/
adb push app/StarLauncherTv/. /version/cust/app/StarLauncherTv/
adb push app/StarMusicTv/. /version/cust/app/StarMusicTv/
adb push app/StarServicesTv/. /version/cust/app/StarServicesTv/
adb push app/StarSetupAppTv/. /version/cust/app/StarSetupAppTv/
adb push app/StarSmarthomeTv/. /version/cust/app/StarSmarthomeTv/
adb push app/StarSystemUiTv/. /version/cust/app/StarSystemUiTv/
adb push app/StarTubeTv/. /version/cust/app/StarTubeTv/
adb push app/StarVideosTv/. /version/cust/app/StarVideosTv/
adb push app/StarVideoTv/. /version/cust/app/StarVideoTv/

echo Proceed to write /hw_product/bin/
pause

adb push staros/bin/. /hw_product/bin/

echo Proceed to write drivers
pause

adb push staros/drivers/libaudioinput /hw_product/lib/
adb push staros/drivers/libaudiooutput /hw_product/lib/
adb push staros/drivers/libbluetooth /hw_product/lib/
adb push staros/drivers/libdeviceid /hw_product/lib/
adb push staros/drivers/libhdmiedid /hw_product/lib/
adb push staros/drivers/libplatformtelemetry /hw_product/lib/
adb push staros/drivers/libvolume /hw_product/lib/

echo Proceed to write starosTv
pause

adb push staros/starosTv/. /version/cust/hw/ru/starosTv/

echo Proceed to write permissions
pause

adb push etc/permissions/staros.hardware.tvset.xml /hw_product/etc/permissions/
adb push etc/default-permissions /hw_product/etc/
echo All files copied

echo Wait before reboot...
timeout 5

adb shell reboot

GOTO End1


:NoParam
@ECHO Use ip address as a parameter, like upload.bat 192.168.1.200

:End1