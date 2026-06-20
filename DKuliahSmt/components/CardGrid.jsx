import Card from './Card'

const CardGrid = ({ features }) => (
  <section className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Mengapa BrandKu?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        { features.map(items => (
            <Card key ={items.id} icon={items.icon} title={items.title} subtitle={items.subtitle} />
        )) }
      </div>
    </section>
)

export default CardGrid;