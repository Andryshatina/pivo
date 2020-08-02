import React from "react";
import { BtdServiceConsumer } from "../btd-service-context";

const WithBtdService = () => (Wrapped) => {
    return(props) => {
        return(
            <BtdServiceConsumer>
                {
                    (btdService) => {
                        return(<Wrapped {...props} btdService={btdService}/>);
                    }
                }
            </BtdServiceConsumer>
        )
    }
}
export default WithBtdService;