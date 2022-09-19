import MainLayout from "../../components/Layout/MainLayout";
import Container from "../../components/ui/Container";

const HomePage = () => {
  return (
    <MainLayout
      title={"Deliza Cake Art"}
      pageDescription={"Pasteles de Fondant"}
    >
      <Container>
        <h1>Home Page</h1>
        <div className="h-96"></div>
      </Container>
    </MainLayout>
  );
};

export default HomePage;
