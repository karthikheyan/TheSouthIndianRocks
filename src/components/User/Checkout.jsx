import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { usePurchaseContext } from "../Context/usePurchaseContext";
import { useUserContext } from "../Context/useUserContext";
import { useNavigate } from "react-router-dom";
export default function Checkout() {
    const navigate = useNavigate();
    const {total, cartDetails} = usePurchaseContext();
    const {userDetails} = useUserContext();
    console.log(total, cartDetails)

    return (
        <div style={{textAlign:"center", margin: "10% auto"}}>
        <h1 style={{marginBottom: "20px"}}>Payment Gateway</h1>
        <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: 1,
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        console.log(details)
                        alert(`Transaction completed by ${userDetails._id}`);
                        fetch(`http://localhost:3000/tsir/purchase/completed/${user}`,{
                            method: "POST",
                            body: formData,
                        })
                        useNavigate('/orders')
                    });
                }}
            />
        </PayPalScriptProvider>
        </div>
    );
}