import React, {useState, useEffect } from "react";
import "./styles.css";
import Success from './success';
const App = () => {
  const [ok, setOk] = useState(false);
  const options = {
    key: "rzp_live_JOlrGIAoSDme3h",
    currency: "INR",
    receipt: "#1",
    amount: "10000", //  = INR 100
    name: "MoneyBall Token",
    description: "Pay for the Webinar",
    // handle after payment success
    handler: function (response) {
      setOk(true);

    },
    prefill: {
      name: "",
      contact: "",
      email: "",
      address: ""
    },
    notes: {
      address: ""
    },
    theme: {
      color: "#26e3ff",
      hide_topbar: false
    }
  };

  const openPayModal = (options) => {
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", (res) => {
      // handle fail Payment
      console.log("Payment Failed: ", res);
      setOk(false);
    });
    rzp1.open();
  };
  useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
      setTimeout(()=>{
          openPayModal(options)},3000)
  }, []);

  return (
    <div>
      {ok?
      (
        <Success />
      )
    :(
      <div className = "buttons">
        <button className = "back-button" onClick={()=> window.open("https://www.premiere-mbt.com/", "_self")}>Go to Home</button><br />
        <button className = "refresh-button" onClick={()=> openPayModal(options)}>Refresh and Pay</button>
      </div>  
    )
    }
    </div>
  );
};
export default App;
