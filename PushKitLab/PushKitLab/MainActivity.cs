using Android.App;
using Android.OS;
using Android.Support.V7.App;
using Android.Runtime;
using Android.Widget;
using Android.Content;
using Com.Huawei.Agconnect.Config;
using System.IO;
using Com.Huawei.Hms.Aaid;
using Android.Util;
using Android.Text;
using System;
using Com.Huawei.Hms.Common;
using Com.Huawei.Hms.Push;

namespace PushKitLab
{
    [Activity(Label = "@string/app_name", Theme = "@style/AppTheme", MainLauncher = true)]
    public class MainActivity : AppCompatActivity
    {
        const string TAG = "PushKitLab";

        protected override void AttachBaseContext(Context context)
        {
            base.AttachBaseContext(context);
            AGConnectServicesConfig config = AGConnectServicesConfig.FromContext(context);

            config.OverlayWith(new HmsLazyInputStream(context));
        }
        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);
            Xamarin.Essentials.Platform.Init(this, savedInstanceState);
            SetContentView(Resource.Layout.activity_main);

            HmsMessaging.GetInstance(this).TurnOnPush().AddOnCompleteListener(new OnCompleteListenerImp());

            GetToken();
        }
        public override void OnRequestPermissionsResult(int requestCode, string[] permissions, [GeneratedEnum] Android.Content.PM.Permission[] grantResults)
        {
            Xamarin.Essentials.Platform.OnRequestPermissionsResult(requestCode, permissions, grantResults);
            base.OnRequestPermissionsResult(requestCode, permissions, grantResults);
        }


        private void GetToken()
        {
            System.Threading.Thread thread = new System.Threading.Thread(() =>
            {
                try
                {
                    string appid = AGConnectServicesConfig.FromContext(this).GetString("client/app_id");
                    string token = HmsInstanceId.GetInstance(this).GetToken(appid, "HCM");
                    Log.Info(TAG, "token = " + token);  

                    if (!TextUtils.IsEmpty(token))
                    {
                        //SendRegTokenToServer(token);
                    }
                }
                catch (Exception e)
                {
                    Log.Info(TAG, e.ToString());
                }
            }
                );
            Log.Info(TAG, "start the thread");
            thread.Start();
        }
        private void DeleteToken()
        {
            System.Threading.Thread thread = new System.Threading.Thread(() =>
            {
                try
                {
                    string appid = AGConnectServicesConfig.FromContext(this).GetString("client/app_id");
                    HmsInstanceId.GetInstance(this).DeleteToken(appid, "HCM");
                    Log.Info(TAG, "deleteToken success.");
                }
                catch (ApiException e)
                {
                    Log.Error(TAG, "deleteToken failed." + e);
                }
            });
            Log.Info(TAG, "start the thread");
            thread.Start();
        }

    }



}