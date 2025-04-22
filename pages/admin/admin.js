import { useState, useEffect } from "react";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [news, setNews] = useState([]);
  const [message, setMessage] = useState("");
  const [editId, setEditId] = useState(null);

  // ดึงข้อมูลข่าวทั้งหมด
  useEffect(() => {
    fetch("http://localhost:5000/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  // เพิ่มหรือแก้ไขข่าว
  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editId ? "PUT" : "POST";
    const url = editId
      ? `http://localhost:5000/news/${editId}`
      : "http://localhost:5000/news";

    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      setMessage(editId ? "ข่าวแก้ไขสำเร็จ!" : "ข่าวเพิ่มสำเร็จ!");
      setTitle("");
      setContent("");
      setEditId(null);
      fetchNews();
    } else {
      setMessage("เกิดข้อผิดพลาดในการเพิ่ม/แก้ไขข่าว");
    }
  };

  // ดึงข่าวจาก API
  const fetchNews = async () => {
    const res = await fetch("http://localhost:5000/news");
    const data = await res.json();
    setNews(data);
  };

  // แก้ไขข่าว
  const handleEdit = (newsItem) => {
    setTitle(newsItem.title);
    setContent(newsItem.content);
    setEditId(newsItem.id);
  };

  // ลบข่าว
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/news/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setMessage("ข่าวถูกลบแล้ว");
      fetchNews();
    } else {
      setMessage("เกิดข้อผิดพลาดในการลบข่าว");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">แดชบอร์ดจัดการข่าว</h1>
      {message && <p className="text-green-500">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold">หัวข้อข่าว</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">เนื้อหาข่าว</label>
          <textarea
            className="w-full p-2 border rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {editId ? "แก้ไขข่าว" : "เพิ่มข่าว"}
        </button>
      </form>

      <h2 className="text-xl font-semibold mt-8">รายการข่าวทั้งหมด</h2>
      <ul className="space-y-4">
        {news.map((item) => (
          <li key={item.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p>{item.content}</p>
            <p className="text-sm text-gray-500">
              วันที่: {new Date(item.created_at).toLocaleString("th-TH")}
            </p>
            <div className="flex space-x-2 mt-4">
              <button
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                onClick={() => handleEdit(item)}
              >
                แก้ไข
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => handleDelete(item.id)}
              >
                ลบ 
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
