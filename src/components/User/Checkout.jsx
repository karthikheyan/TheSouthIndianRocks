import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { usePurchaseContext } from "../Context/usePurchaseContext";

export default function Checkout() {
    const {total, cartDetails} = usePurchaseContext();
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
                                    value: total,
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        console.log(details)
                        alert(`Transaction completed by ${name}`);
                    });
                }}
            />
        </PayPalScriptProvider>
        </div>
    );
}