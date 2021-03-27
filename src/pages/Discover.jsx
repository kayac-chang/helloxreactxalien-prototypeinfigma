import usePosts from "hooks/usePosts";
import Swiper from "components/Swiper";
import Avatar from "components/Avatar";
import Section from "components/Section";
import Gallery from "components/Gallery";
import * as Template from "components/templates";
import * as Button from "components/Button";
import clsx from "clsx";

function WhatsNewToday({ posts }) {
  return (
    <Section title="WHAT'S NEW TODAY">
      <Swiper>
        {posts.slice(0, 4).map(({ photo, id, name, avatar }, index) => (
          <div key={index} className="w-full">
            <img src={photo} alt="img" />

            <Avatar src={avatar} name={name} id={id} />
          </div>
        ))}
      </Swiper>
    </Section>
  );
}

function BrowseAll({ posts }) {
  return (
    <Section title="BROWSE ALL">
      <Gallery resources={posts.map(({ photo }) => photo)} />
    </Section>
  );
}

export default function Discover() {
  const posts = usePosts();

  return (
    <Template.Main className="px-4" title="Discover">
      <WhatsNewToday posts={posts} />

      <BrowseAll posts={posts} />

      <section className="py-8">
        <Button.Default className="text-xs font-bold">SEE MORE</Button.Default>
      </section>
    </Template.Main>
  );
}
