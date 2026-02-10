
import { useState } from "react";

function App() {
  const [link, setLink] = useState("");
  const [qr, setQr] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateQR = async () => {
    if (!link) {
      setError("Please enter a link");
      setQr("");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `http://localhost:4000/qr/generate?link=${encodeURIComponent(link)}`
      );

      const result = await response.json();

      if (result.success) {
        setQr(result.data);
      } else {
        setError(result.message || "Failed to generate QR");
        setQr("");
      }
    } catch (err) {
      setError("Server error. Please check backend.");
      setQr("");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          QR Code Generator
        </h2>

        <input
          type="text"
          placeholder="Paste your link here"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />

        <button
          onClick={generateQR}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate QR"}
        </button>

        {error && (
          <p className="text-red-500 mt-4 text-sm font-medium">{error}</p>
        )}

        {qr && (
            <div className="mt-6 flex justify-center">
            <img src={qr} alt="QR Code" className="w-48 h-48" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
