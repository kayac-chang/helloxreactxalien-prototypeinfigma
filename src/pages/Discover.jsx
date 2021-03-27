import usePosts from "hooks/usePosts";
import Swiper from "components/Swiper";
import * as Avatar from "components/Avatar";
import Section from "components/Section";
import Gallery from "components/Gallery";
import Modal from "components/Modal";
import * as Template from "components/templates";
import * as Button from "components/Button";
import * as Icon from "components/Icon";
import { useState } from "react";

function WhatsNewToday({ posts, onPostClick }) {
  return (
    <Section title="WHAT'S NEW TODAY">
      <Swiper>
        {posts.slice(0, 4).map((post, index) => (
          <button
            key={index}
            className="w-full space-y-4"
            onClick={() => onPostClick(post)}
          >
            <img src={post.photo} alt="img" />

            <Avatar.Small src={post.avatar} name={post.name} id={post.id} />
          </button>
        ))}
      </Swiper>
    </Section>
  );
}

function BrowseAll({ posts, onPostClick }) {
  return (
    <Section title="BROWSE ALL">
      <Gallery>
        {posts.map((post) => (
          <button key={post.photo} onClick={() => onPostClick(post)}>
            <img
              src={post.photo}
              alt={post.photo}
              className="object-cover h-80"
            />
          </button>
        ))}
      </Gallery>
    </Section>
  );
}

function PhotoOpen({ post, onClose }) {
  return (
    <Modal>
      <img
        src={post.photo}
        alt={post.photo}
        className="object-cover h-full absolute top-0 -z-1"
      />

      <div className="absolute top-0 w-full h-full text-white px-4">
        <header className="flex justify-between py-4">
          <Avatar.Small src={post.avatar} name={post.name} id={post.id} />

          <button className="p-2" onClick={onClose}>
            <Icon.Close className="w-3" />
          </button>
        </header>
      </div>
    </Modal>
  );
}

export default function Discover() {
  const posts = usePosts();
  const [modal, setModel] = useState();

  return (
    <>
      <Template.Main className="px-4" title="Discover">
        <div className="space-y-12">
          <WhatsNewToday posts={posts} onPostClick={setModel} />

          <BrowseAll posts={posts} onPostClick={setModel} />
        </div>

        <section className="py-8">
          <Button.Default className="text-xs font-bold">
            SEE MORE
          </Button.Default>
        </section>
      </Template.Main>

      {modal && <PhotoOpen post={modal} onClose={() => setModel(undefined)} />}
    </>
  );
}
