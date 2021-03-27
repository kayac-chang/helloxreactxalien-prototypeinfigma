import usePosts from "api/usePosts";
import Swiper from "components/Swiper";
import Avatar from "components/Avatar";
import * as Button from "components/Button";
import clsx from "clsx";

function Section({ title, children }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xs font-bold">{title}</h2>

      {children}
    </section>
  );
}

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
      <div className="grid grid-cols-2 gap-2 h-screen overflow-hidden">
        {posts.map(({ photo }, index) => (
          <div key={photo} className={clsx({ "-mt-20": !(index % 2) })}>
            <img src={photo} alt="img" className="object-cover h-80" />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default function Discover() {
  const posts = usePosts();

  return (
    <div className="flex flex-col px-4 ">
      <header>
        <h1 className="py-8 text-4xl font-medium font-comfortaa">Discover</h1>
      </header>

      <main>
        <WhatsNewToday posts={posts} />

        <BrowseAll posts={posts} />

        <section className="py-8">
          <Button.Default className="text-xs font-bold">
            SEE MORE
          </Button.Default>
        </section>
      </main>
    </div>
  );
}
