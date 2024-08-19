"use client"

import Image from "next/image"
import React, { useState } from "react"
import { formatNumberWithCommas } from "../util"

function PropertyValuation() {
  const [purchasePrice, setPurchasePrice] = useState<number>(0)
  const [totalDoors, setTotalDoors] = useState<number>(0)
  const [comparablePricePerDoor, setComparablePricePerDoor] =
    useState<number>(0)
  const [comparableGRM, setComparableGRM] = useState<number>(0)
  const [comparableCapRate, setComparableCapRate] = useState<number>(0)
  const [annualRent, setAnnualRent] = useState<number>(0)
  const [noi, setNOI] = useState<number>(0)

  const clear = () => {
    setPurchasePrice(0)
    setTotalDoors(0)
    setComparablePricePerDoor(0)
    setComparableGRM(0)
    setComparableCapRate(0)
    setAnnualRent(0)
    setNOI(0)
  }

  const setDemoData = () => {
    setPurchasePrice(2200000)
    setTotalDoors(16)
    setComparablePricePerDoor(144400)
    setComparableGRM(8.95)
    setComparableCapRate(7.2)
    setAnnualRent(258800)
    setNOI(166960)
  }

  // Valuations
  const pricePerDoorValue = totalDoors * comparablePricePerDoor
  const grossRentMultiplierValue = annualRent * comparableGRM
  const capRateQuickValuationValue = comparableCapRate
    ? noi / (comparableCapRate / 100)
    : 0

  const numberOfSetValues = [
    pricePerDoorValue,
    grossRentMultiplierValue,
    capRateQuickValuationValue,
  ].filter((value) => value > 0).length

  // Valuation Average Calculation
  const valuationAvg =
    (pricePerDoorValue +
      grossRentMultiplierValue +
      capRateQuickValuationValue) /
    (numberOfSetValues || 1)

  const difference = purchasePrice - valuationAvg

  return (
    <div className="container mx-auto p-4 max-w-[1200px]">
      <Image
        src="/logo.png"
        alt="house"
        width={300}
        height={100}
        className="my-8"
      />
      <div className="grid grid-cols-1 gap-6 my-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label className="block text-xxl font-bold text-gray-700">
              Asking price ($):
            </label>
            <input
              type="number"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(Number(e.target.value))}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="e.g., 10"
            />
          </div>
          <div>
            <button
              onClick={clear}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Clear
            </button>
            &nbsp;
            <button
              onClick={setDemoData}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Set Demo Data
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Price per Door */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Price per Door Valuation
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Total Doors:
            </label>
            <input
              type="number"
              value={totalDoors}
              onChange={(e) => setTotalDoors(Number(e.target.value))}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="e.g., 10"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Comparable price per door ($/door):
            </label>
            <input
              type="number"
              value={comparablePricePerDoor}
              onChange={(e) =>
                setComparablePricePerDoor(Number(e.target.value))
              }
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="e.g., 500000"
            />
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700">
              Price per Door value: ${formatNumberWithCommas(pricePerDoorValue)}
            </p>
          </div>
        </div>

        {/* Gross Rent Multiplier */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Gross Rent Multiplier Valuation
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Annual Rent ($):
            </label>
            <input
              type="number"
              value={annualRent}
              onChange={(e) => setAnnualRent(Number(e.target.value))}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="e.g., 100000"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Comparable GRM (%):
            </label>
            <input
              type="number"
              value={comparableGRM}
              onChange={(e) => setComparableGRM(Number(e.target.value))}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="e.g., 10%"
            />
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700">
              GRM value: ${formatNumberWithCommas(grossRentMultiplierValue)}
            </p>
          </div>
        </div>

        {/* Cap Rate Quick Valuation */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Cap Rate Quick Valuation
          </h2>
          {/* Enter noi and comparable cap rate */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              NOI ($):
            </label>
            <input
              type="number"
              value={noi}
              onChange={(e) => setNOI(Number(e.target.value))}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="e.g., 100000"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Comparable Cap Rate (%):
            </label>
            <input
              type="number"
              value={comparableCapRate}
              onChange={(e) => setComparableCapRate(Number(e.target.value))}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="e.g., 10%"
            />
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700">
              Cap rate value: $
              {formatNumberWithCommas(capRateQuickValuationValue)}
            </p>
          </div>
        </div>

        {/* Valuation Average */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Valuation Average</h2>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700">
              Price per Door value:
              <br />${formatNumberWithCommas(pricePerDoorValue)}
            </p>
            <p className="text-sm font-medium text-gray-700">
              Gross Rent Multiplier value:
              <br />${formatNumberWithCommas(grossRentMultiplierValue)}
            </p>
            <p className="text-sm font-medium text-gray-700">
              Comparable Cap Rate value:
              <br />${formatNumberWithCommas(capRateQuickValuationValue)}
            </p>
          </div>
          <div className="mt-4">
            <div className="text-sm font-medium text-gray-700 font-bold">
              Average Valuation: ${formatNumberWithCommas(valuationAvg)}
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          {/* Is property a good deal? */}
          <h2 className="text-xl font-semibold mb-4">
            Is this property a good deal?
          </h2>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700">
              Purchase Price: ${formatNumberWithCommas(purchasePrice)}
            </p>
            <p className="text-sm font-medium text-gray-700">
              Valuation Average: ${formatNumberWithCommas(valuationAvg)}
            </p>
            <p className="text-sm font-medium text-gray-700">
              Difference: ${formatNumberWithCommas(difference)}
            </p>

            <hr className="my-2" />

            <p className="text-sm font-medium text-gray-700">
              Is property a good deal?{" "}
              {purchasePrice < valuationAvg ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyValuation
