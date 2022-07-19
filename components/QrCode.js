import {useEffect} from "react";



function QrCode() {

    let checkInit = false; 

    useEffect(() => {

        //add custom js to header
        const script = document.createElement('script');
        script.src = "https://stg-id.singpass.gov.sg/static/ndi_embedded_auth.js";
        script.async = false;
        document.head.appendChild(script);
        window.addEventListener("load", function(){
            if (!checkInit) {
                checkInit = true;
                init()
            }
        });

        return () => {
            document.head.removeChild(script);
        }
    }, []);



  const parentIframeCssCss = {
    position: "relative",
    overflow: "hidden",
  };

  return (
    <div className="" style={parentIframeCssCss}>
      <div id="api" role="main"></div>
      <div id = "ndi-qr"></div>
    </div>

  )
}




function init() {
  const authParamsSupplier = async() => {
    try{
      return {state: "LHdyaiVAOTs2U2ReQz9ye3pGJCJhSXNBMzNETic1JyMxa11DPCB4PVh1UnFPK2ItZ35yTVlJaHZMcmw8b05bbn5bL1pDN2osUyVVVEE9eDxUJz9AJ2M4I0drSylyNDdFZV1lX1BeU3w=OjBuSl5CMXZsaU1kanMobXdORjhwWCc1Xzo6VnkjdHsx",nonce: "XCVwTFt7Zzs+eWxWXUliT0BwUkJpRkhCdHlYZA==QStjT202Q0MpeytxI3k6e3IkZSMhbj5TWA==NnpHan5tWTlBNmV0ISIuN3l+d1tXRlgieVtWO01nJ0FNd24=azRZbkNiKzB8JSQ0N2kmJ3kjOnZROjA="};
    } catch (error){
      console.log(error)
    }
  };

  const onError = (errorId, messageId) => {
    console.log(`onError.errorId:${errorId} message:${messageId}`);
  };

  const initAuthSessionResponse = window.NDI.initAuthSession(
      'ndi-qr',
      {
        clientId: 'b7mXT9vhJm2bMKKU7j8vYMlJKyZrA4RD',
        redirectUri: 'https://dev.rently.sg/singpasslogin',
        scope: 'openid',
        responseType: 'code',
      },
      authParamsSupplier,
      onError,
      {
        appLaunchUrl : 'rentlyapp://'
      }
  );
  console.log('initAuthSession: ', initAuthSessionResponse);
}
export default QrCode