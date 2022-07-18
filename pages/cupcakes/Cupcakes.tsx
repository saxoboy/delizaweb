import Head from 'next/head'
import Breadcrumb from '@/components/Breadcrumb'
import MainLayout from '@/components/Layout/MainLayout'
import Container from '@/components/ui/Container'

const CupcakesPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Cupcakes - Deliza Cake Art</title>
        <meta
          name="description"
          content="Los mejores Cupcakes tematicos para todos los gustos"
        />
      </Head>
      <Breadcrumb
        title="Cupcakes"
        subtitle="Los mejores Cupcakes tematicos para todos los gustos"
        description="Los mejores Cupcakes tematicos para todos los gustos"
        imageAlt="Los mejores Cupcakes tematicos para todos los gustos"
        overlay={false}
        gradient={true}
      />
      <Container>
        <h1>Cupcakes</h1>
        <div>CupcakesPage</div>
        <div className="h-96"></div>
      </Container>
    </MainLayout>
  )
}

export default CupcakesPage