import React, { useEffect, useState } from 'react';
import axios from 'axios'

const QrCode = () => {

  async function init() {
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
        redirectUri: 'https://stg-id.singpass.gov.sg/token',
        scope: 'openilogind',
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
  // const [use, setUser] = useState('')
  // const url = 'https://dev.rently.sg/singpasslogin'
  // const getToken = () => {
  //   axios.get(url)
  //     .then(response => {
  //       setUser(response.data)
  //       console.log(response.data, 'aa')
  //     })
  // }
  // useEffect(() => {
  //   getToken()
  // })

  return (
    <>
      <div className="container-fluid unified_container" role="presentation">
        <div className="row">

          <div className="panel panel-default">
            <div className="panel-body">

              <div style={{ padding: '10px 0', textAlign: 'center' }}>
                <h2 style={{ color: '#301064', fontSize: '20px', fontWeight: 'bold' }}>Login your account</h2>
              </div>

              <div id="api" role="main"></div>
              <div id="ndi-qr"></div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 d-none d-xl-block g-0">
          <img src="https://rentlystoragedev.blob.core.windows.net/b2clogin/loginBanner.jpeg" className="img-fluid" />
        </div>
      </div>


    </>
  )
}

export default QrCode;
