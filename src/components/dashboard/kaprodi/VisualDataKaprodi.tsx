import React from "react";
import { ChartWidget, Chartoke, Chartsat, ChartPSB } from "../Chart"
import SelectionTable from "../SelectionTable";
import Jadwal from "../Jadwal";

const VisualData: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <main className="p-6 flex-1">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Selamat Datang Kaprodi, Iwan Iskandar, M.Kom
          </h2>
          <p className="text-lg text-gray-500 mt-2">
            Berikut Data Terkini Mengenai Seminar Kerja Praktek Prodi Teknik Informatika
          </p>
        </div>

        {/* Stats Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {/* Kartu Statistik */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500">
            <p className="text-gray-600 text-sm">Total Tahap Persyaratan</p>
            <h2 className="text-2xl font-semibold mt-1">3</h2>
            <p className="text-blue-500 text-sm mt-2">Mahasiswa</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-yellow-500">
            <p className="text-gray-600 text-sm">Total Tahap Pendaftaran</p>
            <h2 className="text-2xl font-semibold mt-1">10</h2>
            <p className="text-yellow-500 text-sm mt-2">Mahasiswa</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500">
            <p className="text-gray-600 text-sm">Total Tahap Pasca-Seminar</p>
            <h2 className="text-2xl font-semibold mt-1">19</h2>
            <p className="text-green-500 text-sm mt-2">Mahasiswa</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-purple-500">
            <p className="text-gray-600 text-sm">Total Selesai Seminar</p>
            <h2 className="text-2xl font-semibold mt-1">21</h2>
            <p className="text-purple-500 text-sm mt-2">Mahasiswa</p>
          </div>
        </div>

        {/* Chart Section - Horizontal Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-[60%,40%] lg:grid-cols-[60%,40%] gap-6 mb-8">
          {/* ChartCard */}
          <div className="flex justify-center bg-white shadow-lg rounded-lg p-6 w-full">
            <div className="w-full">
              <Jadwal /> 
            </div>
          </div>

          {/* Widget Chart */}
          <div className="flex justify-center bg-white shadow-lg rounded-lg p-6 w-full">
            <div className="w-full">
              <ChartWidget />
            </div>
          </div>
        </div>

        {/* Additional Charts and Tables */}
        <div className="grid grid-cols-1 sm:grid-cols-[60%,40%] lg:grid-cols-[60%,40%] gap-6 mb-8">
          {/* Chartsat (6% lebar) */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Chartsat />
          </div>

          {/* Tablelok (35% lebar) */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <ChartPSB />
          </div>
        </div>

        {/* Selection Table and Prapasca Chart */}
        <div className="grid grid-cols-1 sm:grid-cols-[60%,40%] lg:grid-cols-[60%,40%] gap-6 mb-8">
          {/* Selection Table (70% lebar) */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <SelectionTable />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Chartoke />
          </div>
        </div>
      </main>
    </div>
  );
};

export default VisualData;