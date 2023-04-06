import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import HeroImage from "../components/HeroImage";
import Loader from "../components/Loader";
import Message from "../components/Message";
import PhoneImageContainer from "../components/PhoneImageContainer";
import PhoneLinkGSMArena from "../components/PhoneLinkGSMArena";
import PhoneTable from "../components/PhoneTable";

const PhonesDetail = () => {
  let slug = useParams().slug;

  const { data, error, loading } = useFetch(
    `https://phone-specs-api.azharimm.dev/${slug}`
  );

  if (error)
    return (
      <Message
        msg={`Ha ocurrio un error. <br> Es probable que el equipo '<span>${slug}</span>' no exista`}
        bgColor="#ce0000c2"
      ></Message>
    );

  if (loading) return <Loader></Loader>;

  if (!data) return null;

  const {
    data: {
      specifications,
      storage,
      brand,
      phone_name,
      phone_images,
      release_date,
    },
  } = data;

  let urlBackgroundImage = phone_images[0];

  return (
    <div>
      <HeroImage
        urlBackgroundImage={urlBackgroundImage}
        options={{ brand: brand, name: phone_name }}
      ></HeroImage>
      <section>
        <PhoneImageContainer
          phone_name={phone_name}
          phone_images={phone_images}
        ></PhoneImageContainer>
        <p className="released margin-bottom-2">
          Fecha de lanzamiento: {release_date.replace("Released ", "")}
        </p>
        <PhoneTable
          specifications={specifications}
          storage={storage}
        ></PhoneTable>
        <PhoneLinkGSMArena
          phone_name={phone_name}
          slug={slug}
        ></PhoneLinkGSMArena>
      </section>
    </div>
  );
};

export default PhonesDetail;
