using Android.Util;
using Com.Huawei.Hmf.Tasks;

namespace PushKitLab
{
    internal class OnCompleteListenerImp : Java.Lang.Object, IOnCompleteListener
    {
        private static readonly string TAG = "MainActivity: OnCompleteListenerImp";

        public OnCompleteListenerImp()
        {
        }

        public void OnComplete(Task task)
        {
            if (task.IsSuccessful)
            {
                Log.Info(TAG, "Task Complete");
            }
            else
            {
                Log.Error(TAG, "Task Failed");
            }
        }
    }
}