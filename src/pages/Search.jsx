import * as Template from "components/templates";
import * as Input from "components/Input";
import * as Button from "components/Button";
import Section from "components/Section";
import usePhotos from "hooks/usePhotos";

export default function Search() {
  const photos = usePhotos();

  return (
    <Template.Main title="Search">
      <div>
        <section className="mb-8">
          <Input.Text placeholder="Keyword" />
        </section>

        <Section title="ALL RESULTS">
          <div className="grid grid-cols-3 gap-2">
            {photos.map((src) => (
              <img key={src} src={src} alt="img" />
            ))}
          </div>

          <section className="pt-4 pb-8">
            <Button.Default className="text-xs font-bold">
              SEE MORE
            </Button.Default>
          </section>
        </Section>
      </div>
    </Template.Main>
  );
}
