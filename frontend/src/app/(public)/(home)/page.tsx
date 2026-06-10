import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Агрегатор аренды жилья по всей России',
    description: 'Агрегатор аренды недвижимости',
}

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {[...Array(20)].map((_, index) => (
        <div key={index} className="border p-4 rounded-lg">
          Контейнер #{index + 1}
        </div>
      ))}
    </div>
  );
}

