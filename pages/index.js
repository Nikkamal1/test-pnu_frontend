import { useEffect, useState } from "react";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">ข่าวสารคณะวิศวะ</h1>
      {news.length === 0 ? (
        <p>ไม่มีข่าว</p>
      ) : (
        <ul className="space-y-4">
          {news.map((item) => (
            <li key={item.id} className="border p-4 rounded shadow">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p>{item.content}</p>
              <p className="text-sm text-gray-500">
                วันที่: {new Date(item.created_at).toLocaleString("th-TH")}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
