import usePosts from "api/usePosts";
import Swiper from "components/Swiper";
import Avatar from "components/Avatar";

export default function Discover() {
  const posts = usePosts();

  return (
    <div className="flex flex-col px-4">
      <header>
        <h1 className="py-8 text-4xl font-medium font-comfortaa">Discover</h1>
      </header>

      <main>
        <section className="space-y-4">
          <h2 className="text-xs font-bold">WHAT'S NEW TODAY</h2>

          <Swiper>
            {posts.slice(0, 4).map(({ photo, id, name, avatar }, index) => (
              <div key={index} className="w-full">
                <img src={photo} alt="img" />

                <Avatar src={avatar} name={name} id={id} />
              </div>
            ))}
          </Swiper>
        </section>
      </main>
    </div>
  );
}
