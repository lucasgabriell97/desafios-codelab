import React from "react";
import Article from "../Article/Article";

import "./style.css";

import articleImg1 from "../../assets/images/image-1.png";
import articleImg2 from "../../assets/images/image-2.png";
import articleImg3 from "../../assets/images/image-3.png";
import articleImg4 from "../../assets/images/image-4.png";
import articleImg5 from "../../assets/images/image-5.png";
import articleImg6 from "../../assets/images/image-6.png";

const articles = [
  {
    img: articleImg1,
    title: "O que é linguagem de programação? Conheça as principais",
    description:
      "Uma das mais populares vertentes da tecnologia da informação, a área de...",
  },
  {
    img: articleImg2,
    title:
      "Python: por que a linguagem é tão usada para Data Science e finanças?",
    description:
      "O mundo da programação conta com algumas opções de linguagem para...",
  },
  {
    img: articleImg3,
    title: "GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários",
    description:
      "O popular serviço de repositório de código GitHub foi adquirido pela...",
  },
  {
    img: articleImg4,
    title: "15 comandos no GIT que os desenvolvedores precisam saber",
    description:
      "Dominar os comandos GIT é uma habilidade que se conquista com...",
  },
  {
    img: articleImg5,
    title: "GIT e GitHub: o que são e quais as diferenças entre eles?",
    description:
      "Git e GibHub são dois softwares de controle de versão essenciais para...",
  },
  {
    img: articleImg6,
    title:
      "GitHub Copilot ganha integração com GPT-4 e interface conversacional",
    description:
      "O GitHub Copilot, ferramenta de desenvolvimento baseada em IA...",
  },
];

const ArticleSection = () => {
  return (
    <section id="article-section" className="article-section">
      <div className="container">
        <h2>Artigos recomendados</h2>
        <div className="articles">
          {articles.map((article, index) => (
            <Article
              key={index}
              articleImg={article.img}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
