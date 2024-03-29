import React, { useState } from "react";
import { Button, Modal } from "antd";

const Purchase = ({open, setOpen}: any) => {
    const [payment, setPayment] = useState(0)
  
    const hideModal = () => {
        setOpen(false);
    };
    return (
        <Modal
            title={<div className="text-[18px] font-[700]">
                Bill Summary
            </div>}
            open={open}
            onOk={hideModal}
            onCancel={hideModal}
            okText="Confirm"
            
            // cancelText="*"
            // cancelText={<Button className="gap-4 h-[40px] bg-[#AE01FF] hover:bg-[#AE01FF!important] text-[#fff] text-[14px] font-[500] px-8 max-md:px-4 py-4 flex items-center justify-center">Cancel</Button>}
            >
             <div className="w-[355px] h-[255px] shadow-[0px_0px_10px_0px_#8549a7]">
                <div className="">
                </div>
            </div>
            <div className="">
                {}
            </div>
        </Modal>
    )
}

export default Purchase;