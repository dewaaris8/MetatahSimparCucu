"use client";
import { useState, useEffect } from "react";

export default function GuestForm() {
  const [form, setForm] = useState({
    name: "",
    attendance: "",
    pax: "",
    wishes: "",
  });
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "";
  }>({
    message: "",
    type: "",
  });
  const [guests, setGuests] = useState<any[]>([]);

  // Fetch data tamu
  const fetchGuests = async () => {
    const res = await fetch("/api/guests");
    const data = await res.json();
    if (data.success) setGuests(data.data);
  };

  useEffect(() => {
    fetchGuests();
  }, []);

  // Handler form
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    // Jika attendance = Tidak Hadir → pax otomatis 0
    if (name === "attendance" && value === "Tidak Hadir") {
      setForm({ ...form, attendance: value, pax: "0" });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Toast handler
  const showToastMessage = (msg: string, type: "success" | "error") => {
    setToast({ message: msg, type });
    setTimeout(() => setToast({ message: "", type: "" }), 3000); // hilang 3 detik
  };

  // Submit form
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/guests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      showToastMessage("Your message has been sent with love.", "success");
      setForm({ name: "", attendance: "", pax: "", wishes: "" }); // reset kosong
      fetchGuests();
    } else {
      showToastMessage("❌ Gagal menyimpan data", "error");
    }
  };

  return (
    <div className="relative">
      {/* ✅ TOAST */}
      {toast.message && (
        <div
          className={`fixed top-5 right-5 px-4 py-2 rounded-md shadow-lg text-sm font-medium transition-all duration-500 z-[9999] ${
            toast.type === "success"
              ? "border border-white/30 text-white backdrop-blur-xl "
              : "bg-red-500 text-white"
          }`}
        >
          {toast.message}
        </div>
      )}

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex h-max flex-col font-Comfortaa gap-4 py-6 relative"
      >
        <div className="z-10 text-white text-center w-full flex flex-col">
          <p className="font-mono text-left text-[12px]">
            We kindly ask you to confirm your attendance and feel free to leave
            your wishes below. It bring us great joy to celebrate this
            meaningful day with you.
          </p>
        </div>

        {/* NAME */}
        <div className="text-white w-full">
          <h3 className="text-[13px] font-mono uppercase">Name</h3>
          <input
            type="text"
            name="name"
            placeholder="Input Your Name"
            className="font-mono w-full uppercase border-b-2 border-white bg-transparent text-[13px] p-2 text-white focus:outline-none focus:border-[#e6c643] transition duration-300 placeholder-white"
            required
            value={form.name}
            onChange={handleChange}
          />
        </div>

        {/* ATTENDANCE */}
        <div className="text-white w-full">
          <h3 className="text-[13px] font-mono uppercase">ATTENDANCE</h3>
          <select
            name="attendance"
            value={form.attendance}
            onChange={handleChange}
            className="border-b-2 font-mono w-full border-white bg-transparent p-2 text-white text-[13px] focus:outline-none focus:border-[#e6c643] transition duration-300"
            required
          >
            <option
              value=""
              disabled
              hidden
              className="text-gray-400 font-mono"
            >
              Select Attendance
            </option>
            <option value="Hadir" className="text-black font-mono">
              Yes
            </option>
            <option value="Tidak Hadir" className="text-black font-mono">
              No
            </option>
          </select>
        </div>

        {/* PAX */}
        <div className="text-white w-full">
          <h3 className="text-[13px] font-mono uppercase">Number of Pax</h3>
          <select
            name="pax"
            value={form.pax}
            onChange={handleChange}
            disabled={form.attendance === "Tidak Hadir"} // 🔒 lock kalau Tidak Hadir
            className={`border-b-2 border-white font-mono w-full bg-transparent p-2 text-white text-[13px] focus:outline-none transition duration-300 ${
              form.attendance === "Tidak Hadir"
                ? "opacity-50 cursor-not-allowed"
                : "focus:border-[#e6c643]"
            }`}
            required
          >
            <option
              value=""
              disabled
              hidden
              className="text-gray-400 font-Comfortaa"
            >
              Select Pax
            </option>
            <option value="0" hidden className="text-black font-Comfortaa">
              0
            </option>
            <option value="1" className="text-black font-Comfortaa">
              1
            </option>
            <option value="2" className="text-black font-Comfortaa">
              2
            </option>
            <option value="3" className="text-black font-Comfortaa">
              3
            </option>
          </select>
        </div>

        {/* WISHES */}
        <h3 className="text-[13px] font-mono uppercase">wishes</h3>
        <textarea
          name="wishes"
          value={form.wishes}
          onChange={handleChange}
          placeholder="Input Your Wishes"
          className="font-mono text-[13px] border-b-2 border-white bg-transparent p-2 text-white focus:outline-none focus:border-[#e6c643] transition duration-300 placeholder-white"
          required
        />

        <button
          type="submit"
          className="bg-gradient-to-r text-[13px] from-[#e6c643] to-[#c8a530] text-black font-semibold p-2 mt-2 hover:opacity-90 transition duration-300 cursor-pointer z-50"
        >
          Share Your Wishes
        </button>
      </form>

      {/* LIST TAMU */}
      {/* <div className="text-white mt-6">
        <h3 className="text-[14px] font-mono uppercase mb-2">Guest List</h3>
        <div className="max-h-[300px] overflow-y-auto border border-white/30 rounded-md p-3 space-y-3">
          {guests.length === 0 ? (
            <p className="text-[12px] text-gray-400">Belum ada data tamu</p>
          ) : (
            guests.map((guest, idx) => (
              <div
                key={idx}
                className="p-2 border-b border-white/20 last:border-0"
              >
                <p className="font-semibold uppercase text-[13px]">
                  {guest.name}{" "}
                  <span className="text-yellow-400">
                    {guest.attendance === "Hadir"
                      ? "(Will Attend)"
                      : guest.attendance === "Tidak Hadir"
                      ? "(Will Not Attend)"
                      : guest.attandance}
                  </span>
                </p>
                <p className="italic text-[12px] text-gray-300">
                  “{guest.wishes}”
                </p>
              </div>
            ))
          )}
        </div>
      </div> */}
    </div>
  );
}
