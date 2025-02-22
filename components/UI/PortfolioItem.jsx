import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import Image from "next/image";
import Link from "next/link";

const PortfolioItem = (props) => {
  const { title, img, liveUrl, techStack = [] } = props.item; // Default empty array if no techStack

  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {techStack.length > 0 && // Check if techStack is not empty
          <div className={`${classes.portfolio__techstack}`}>
            {techStack.map((item, index) => (
              <span className={`${classes.portfolio__tech}`} key={index}>
                {item}
              </span>
            ))}
          </div>
        }
      </div>

      <div className={`${classes.portfolio__img}`}>
        <Image alt="portfolio-img" src={img} width="380" height="250" />
      </div>

      <div className={`${classes.portfolio__live} bg-transparent`}>
        <button className="primary__btn">
          <Link href={liveUrl}>GitHub</Link>
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
