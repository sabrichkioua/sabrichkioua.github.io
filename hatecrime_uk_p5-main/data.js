// the min radius of a circle 
const radius = 4;
// spacing between the circles in the circle packing
const padding = 5;
// how many reports do we want each circle to represent
const numReportsPerCircle = 100;

// the raw number of reports for each year
const dataLondonMet = {
  "2010": 6996, 
  "2011": 7990, 
  "2012": 9559, 
  "2013": 9373, 
  "2014": 11548, 
  "2015": 14168, 
  "2016": 16791, 
  "2017": 17006, 
  "2018": 16543, 
  "2019": 18480, 
  "2020": 21226
}

// transform the data into more usable format
let dataPacked = []
for (const [year, num] of Object.entries(dataLondonMet)) {
  dataPacked.push({
    year: +year,
    numReports: +num,
    numReportsHundreds: Math.round(+num/numReportsPerCircle)
  })
}

dataPacked.sort((a, b) => d3.ascending(a.year, b.year))
// find the max number of reports across all the years; we will need this later 
// to construct a circle packing with the max num of circles, where 1 circle = numReportsPerCircle reports
const maxNumReportsHundreds = d3.max(dataPacked, d=>d.numReportsHundreds)

// create circle packing with as many circles as the max number of reports in a year - which here is in 2020
const maxPacking = d3.packSiblings(
  d3.range(maxNumReportsHundreds).map(() => ({
    r: radius + padding + Math.floor(Math.random()*10),
  }))
)