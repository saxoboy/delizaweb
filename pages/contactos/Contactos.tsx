import Breadcrumb from "@/components/Breadcrumb";
import MainLayout from "../../components/Layout/MainLayout";
import Container from "../../components/ui/Container";
import BgContactos from "@/public/img/bg-pasteles-portada.jpg";

const ContactosPage = () => {
  return (
    <MainLayout
      title="Contactos - Deliza Cake Art"
      pageDescription="Contactanos y cotiza tu pastel"
    >
      <Breadcrumb
        title="Contactos"
        subtitle="Los mejores pasteles de fondant y crema"
        image={BgContactos}
        description="Los mejores pasteles de fondant y crema"
        imageAlt="Los mejores pasteles de fondant y crema"
        overlay={false}
        gradient={true}
      />
      <Container>
        <h1>Contactenos</h1>
        <div>ContactosPage</div>
        <div className="h-96"></div>
      </Container>
    </MainLayout>
  );
};

export default ContactosPage;
