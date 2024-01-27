import { useState } from "react";
import { StretchesModal } from "../components/modals/stretchesModal";
import "../styles.css";
export default function Stretches() {
  const [open, setOpen] = useState(true);
  function closeModal() {
    setOpen(false);
  }
  return (
    <>
      <div className="stretches-page ">
        <div className={`${open && "blur"}`}>
          <h1> Here are my stretches </h1>
          <button onClick={() => setOpen(true)}>Open Modal</button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            repellat perferendis tenetur, praesentium saepe consectetur nam
            facere excepturi dolor voluptates explicabo, ullam nulla vero amet
            harum quisquam sequi veritatis doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            repellat perferendis tenetur, praesentium saepe consectetur nam
            facere excepturi dolor voluptates explicabo, ullam nulla vero amet
            harum quisquam sequi veritatis doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            repellat perferendis tenetur, praesentium saepe consectetur nam
            facere excepturi dolor voluptates explicabo, ullam nulla vero amet
            harum quisquam sequi veritatis doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            repellat perferendis tenetur, praesentium saepe consectetur nam
            facere excepturi dolor voluptates explicabo, ullam nulla vero amet
            harum quisquam sequi veritatis doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            repellat perferendis tenetur, praesentium saepe consectetur nam
            facere excepturi dolor voluptates explicabo, ullam nulla vero amet
            harum quisquam sequi veritatis doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            repellat perferendis tenetur, praesentium saepe consectetur nam
            facere excepturi dolor voluptates explicabo, ullam nulla vero amet
            harum quisquam sequi veritatis doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            repellat perferendis tenetur, praesentium saepe consectetur nam
            facere excepturi dolor voluptates explicabo, ullam nulla vero amet
            harum quisquam sequi veritatis doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            repellat perferendis tenetur, praesentium saepe consectetur nam
            facere excepturi dolor voluptates explicabo, ullam nulla vero amet
            harum quisquam sequi veritatis doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            repellat perferendis tenetur, praesentium saepe consectetur nam
            facere excepturi dolor voluptates explicabo, ullam nulla vero amet
            harum quisquam sequi veritatis doloremque.
          </p>
        </div>
        {open && <StretchesModal closeModal={closeModal} />}
      </div>
    </>
  );
}
