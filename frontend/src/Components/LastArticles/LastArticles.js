import React from "react";
import ArticleBox from "../ArticleBox/ArticleBox";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./LastArticles.css";
export default function LastArticles() {
  return (
    <section class="articles">
      <div class="container">
        <SectionHeader
          title="جدیدترین مقاله ها"
          desc="پیش به سوی ارتقای دانش"
          btnTitle="تمامی مقاله ها"
        />
        <div class="articles__content">
          <div class="row">
            <ArticleBox
              cover="images/blog/3.jpg"
              title="نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
              desc="زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه
            های مختلفی برای تسریع..."
            />
            <ArticleBox
              cover="images/blog/3.jpg"
              title="نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
              desc="زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه
            های مختلفی برای تسریع..."
            />
            <ArticleBox
              cover="images/blog/3.jpg"
              title="نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
              desc="زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه
            های مختلفی برای تسریع..."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
