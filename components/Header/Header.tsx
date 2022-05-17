import React, { useEffect, useState } from "react";
import { Confirm } from "semantic-ui-react";

import AnimatedHeader from "./AnimatedHeader";
import RottenHeader from "./RottenHeader";
import ModalHeaderContent from "./ModalHeaderContent";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [dead, setDead] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [count, setCount] = useState(0);

  const closeModal = () => setModalOpen(false);
  const toggleVisible = () => setVisible((prevVisible) => !prevVisible);

  useEffect(() => {
    window.setTimeout(toggleVisible, 350);
  }, []);

  useEffect(() => {
    if (count === 4) {
      setDead(true);
      setModalOpen(true);
    }
  }, [count]);

  return (
    <div className="container">
      {dead ? (
        <RottenHeader />
      ) : (
        <AnimatedHeader
          visible={visible}
          onClick={toggleVisible}
          onComplete={() =>
            setCount((prevCount) => (prevCount = prevCount + 1))
          }
        />
      )}

      <Confirm
        open={modalOpen}
        content={ModalHeaderContent}
        onCancel={closeModal}
        onConfirm={closeModal}
        cancelButton="Ay, lo siento"
        confirmButton="OK"
        closeOnDimmerClick={false}
      />

      <style jsx>
        {`
          .container {
            margin: 2rem 0 3rem;
          }
          .container :global(.header) {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
