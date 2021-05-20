#!/system/bin/sh

echo Remounting...
mount -o remount,rw /version
sleep 5
echo Goto APP
cd /version/cust/app/
echo Cleaning APP
rm -r Star*
echo Goto StarOS
cd /version/cust/hw/ru/starosTv
echo Cleaning StarOS
rm -r *
echo Goto data/staros StarOS
cd /data/staros
echo Cleaning data/staros StarOS
rm -r *
echo Goto hw_product/bin
cd /hw_product/bin
echo cleaning hw_product/bin
rm -r staros*
#reboot