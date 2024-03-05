import "../styles.css";
import { AppContext } from "../App";
import { useContext } from "react";

import { Link, useParams } from "react-router-dom";

// pull dynamic url param :id
export default function Article() {
  const {
    data: { articles },
  } = useContext(AppContext);
  const { id } = useParams();
  const articleMatch = articles.find((article) => article._id === id) || {};

  return (
    <>
      <div className="article-page">
        <Link to="/articles" className="link-article">
          {" "}
          {articleMatch.category}
        </Link>
        <div className="single-article-title"> {articleMatch.title}</div>
        <img className="single-article-image" src={articleMatch.image} />
        <p className="single-article-content">
          <h1>Header One</h1>
          <p className="paragraph-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cum
            suscipit ipsum dicta. Corrupti corporis consequatur non tempore iure
            assumenda provident veniam quia fuga. Asperiores recusandae
            distinctio quo minima debitis. Nemo, sint. Magnam placeat vel sunt
            velit harum ut voluptates dolores obcaecati dolorum. Quasi, odit
            voluptates, ex necessitatibus exercitationem ipsam corrupti dolores
            impedit quibusdam architecto repellat vitae perferendis alias sunt?
            Reiciendis aliquam sequi commodi esse dolor quae, ad ab eum sint
            beatae saepe sit deserunt dolores velit quam culpa amet accusamus
            deleniti similique harum obcaecati qui ratione. Illo, deserunt
            molestiae! Eaque perferendis officia nobis debitis impedit eveniet
            cum, placeat velit explicabo voluptatibus. Cum assumenda natus
            debitis facere velit et vitae reprehenderit autem, praesentium vero
            mollitia, id nemo molestiae libero consequuntur.
          </p>
          <h2> Header Two</h2>
          <p className="paragraph-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            culpa, laborum nulla cupiditate ex eligendi, officia quasi
            consequatur nam quidem aspernatur necessitatibus! Totam obcaecati
            cumque ratione ipsam, consectetur dicta ipsum! Et vel accusantium
            vitae repellat facere voluptatum deserunt dolor voluptatem
            voluptatibus corporis. Obcaecati nihil rem cum quaerat cupiditate
            similique itaque facilis quo eum aspernatur! Tenetur consectetur
            corporis doloribus excepturi labore. Quas fuga molestiae,
            repudiandae ipsum qui eveniet obcaecati assumenda! Facere earum
            itaque esse quisquam maiores possimus enim commodi a, expedita
            rerum, accusantium atque cum ipsam! Veritatis consectetur tempore
            laudantium accusamus! Labore, quam laboriosam libero eveniet sed
            veniam nobis odit nulla, qui est molestiae error ea nesciunt
            deleniti architecto reprehenderit at asperiores odio accusantium
            autem tempore eos, voluptates vero. Magnam, laudantium. Deleniti,
            dolorem. Impedit unde molestiae modi repudiandae neque iure quo,
            quisquam reprehenderit quaerat maiores eos ducimus illo facilis hic
            nam aut voluptates iste labore, praesentium, aspernatur laborum!
            Ipsa, corrupti modi! Dolores facere dicta at aut perspiciatis iste
            dolore. Numquam possimus dolorum iste. Rem, obcaecati! Porro
            explicabo aut ipsa dolorum velit quo quos nemo voluptate
            necessitatibus? Magni mollitia error harum laudantium. Commodi
            officia soluta, magnam et quo veritatis omnis excepturi perferendis
            architecto animi cumque consectetur, dignissimos facere, nihil
            sapiente dolorum atque nobis. Molestiae, deserunt! Quasi, delectus
            adipisci nulla sint eaque dolores.
          </p>
        </p>
      </div>
    </>
  );
}
