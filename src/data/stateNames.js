export default [
  {
    abbreviation: "AK",
    notes:
      "Negatives = (Totals – Positives)\nPositives occasionally update before totals do; do not revise negatives down, keep the last calculated negative. \nAs of May 16, Alaska reports specimens tested; because some people may be tested more than once, this number may be higher than the number of people tested.",
    covid19Site:
      "http://dhss.alaska.gov/dph/Epi/id/Pages/COVID-19/monitoring.aspx",
    covid19SiteSecondary:
      "http://dhss.alaska.gov/dph/Epi/id/Pages/COVID-19/default.aspx",
    covid19SiteTertiary:
      "https://alaska-dhss.maps.arcgis.com/apps/opsdashboard/index.html#/8782a14ef52342e99f866a3b8a3e624a",
    twitter: "@Alaska_DHSS",
    covid19SiteOld:
      "http://dhss.alaska.gov/dph/Epi/id/Pages/COVID-19/default.aspx",
    name: "Alaska",
    fips: "02",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "AL",
    notes:
      "Negatives = (Totals - Positives) \nPositives occasionally update before totals do; do not revise negatives down, keep the last calculated negative.",
    covid19Site:
      "https://alpublichealth.maps.arcgis.com/apps/opsdashboard/index.html#/6d2771faa9da4a2786a509d82c8cf0f7",
    covid19SiteSecondary: "https://dph1.adph.abbreviation.al.us/covid-19/",
    covid19SiteTertiary: "",
    twitter: "@alpublichealth",
    covid19SiteOld:
      "http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html",
    name: "Alabama",
    fips: "01",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "AR",
    notes: null,
    covid19Site:
      "https://www.healthy.arkansas.gov/programs-services/topics/novel-coronavirus",
    covid19SiteSecondary:
      "https://adem.maps.arcgis.com/apps/opsdashboard/index.html#/f533ac8a8b6040e5896b05b47b17a647",
    covid19SiteTertiary: "",
    twitter: "@adhpio",
    covid19SiteOld:
      "https://www.healthy.arkansas.gov/programs-services/topics/novel-coronavirus",
    name: "Arkansas",
    fips: "05",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "AS",
    notes:
      "AS does not have a regularly updated data source. We monitor AS social media, emergency declarations, and local media for updates.\nOn July 1, American Samoa reported on its Facebook page that it had acquired testing machines and kits and had conducted 816 tests all with negative results.",
    covid19Site: "https://www.americansamoa.gov/covid-19-advisories",
    covid19SiteSecondary: "https://www.facebook.com/amsamgov/",
    covid19SiteTertiary: "",
    twitter: "",
    covid19SiteOld:
      "http://www.samoagovt.ws/2020/03/ministry-of-health-coronavirus-covid-19-update-14-march-2020/",
    name: "American Samoa",
    fips: "60",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "AZ",
    notes:
      "Dashboard now has a new tab that details total tested. \nNegative = Total - Positive.\nWe do not currently track it, but hospitalization and ICU data is available from [Maricopa County](https://www.maricopa.gov/5460/Coronavirus-Disease-2019) and [Pima County](https://webcms.pima.gov/cms/One.aspx?portalId=169&pageId=527452).\nAs of May 8, Arizona is reporting specimens tested, including both PCR and antibody tests. Because some people may be tested more than once, this number is probably higher than the number of people tested.\nOn June 23, we updated our historical data for cumulative hospitalization to match the AZ dashboard's hospitalized by date admitted data. This data is not typically reported until several days after admittance. Our daily updates to this value going forward will continue to take AZ's overall number as of that day, regardless of date admitted.",
    covid19Site:
      "https://www.azdhs.gov/preparedness/epidemiology-disease-control/infectious-disease-epidemiology/covid-19/dashboards/index.php",
    covid19SiteSecondary:
      "https://tableau.azdhs.gov/views/Hospitalization/HospitalizedCOVID-19Cases?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Ftableau.azdhs.gov%2F&:embed_code_version=3&:tabs=no&:toolbar=no&:showAppBanner=false&:display_spinner=no&iframeSizedToWindow=true&:loadOrderID=3",
    covid19SiteTertiary:
      "https://tableau.azdhs.gov/views/ExternalEMResourceCOVIDSpecificDashboard/InpatientCOVID-19?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Ftableau.azdhs.gov%2F&:embed_code_version=3&:tabs=yes&:toolbar=no&:showAppBanner=false&:display_spinner=no&iframeSizedToWindow=true&:loadOrderID=4",
    twitter: "@azdhs",
    covid19SiteOld:
      "https://www.azdhs.gov/preparedness/epidemiology-disease-control/infectious-disease-epidemiology/covid-19/dashboards/index.php",
    name: "Arizona",
    fips: "04",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "CA",
    notes:
      "Before April 1 CA was inconsistent in the timing of reporting so we used faster-updating sources, we then standardized on the abbreviation data dashboard(s). This led to a drop in cases and deaths, as the abbreviation's data lags county sources.\nThe abbreviation reported a huge batch of negative tests on April 4 and again on April 22.\nAs of April 22, California now reports specimens tested instead of people tested. Because some people may be tested more than once, this number is probably higher than the number of people tested.\nOn July 8, CA data included a backlog of data from Los Angeles County, which had not reported for several days. About 1000 of the 11,000 new cases are due to this spike in reporting.",
    covid19Site:
      "https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/Immunization/ncov2019.aspx",
    covid19SiteSecondary:
      "https://www.cdph.ca.gov/Programs/OPA/Pages/New-Release-2020.aspx",
    covid19SiteTertiary: "",
    twitter: "@CAPublicHealth",
    covid19SiteOld:
      "https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/Immunization/ncov2019.aspx",
    name: "California",
    fips: "06",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "CO",
    notes:
      "Negative = People Tested - Cases. Cases include people who test positive for COVID-19 AND people who have symptoms of COVID-19 and are a close contact to someone who tested positive. While Colorado publishes a confirmed/probable breakdown, this breakdown pertains to cases resulting in deaths rather than death certificates with COVID-19 listed as a contributing cause. As such, we do not count from it to maintain consistency with the total deaths figure from death certificates.As of April 27, Colorado is reporting people tested. On 6/14, CO revised some previous daily discharged number. This caused an overall decline in their recovered count. On 5/15 (which we caught on our update 5/16), Colorado started providing a new figure for deaths where COVID-19 is listed on the death certificate, in addition to the figure it already provided, deaths among laboratory-confirmed and probable cases (whether or not COVID was a cause of death). On 7/1, we revised our historical data to reflect the deaths certificate figure instead of the deaths among cases. As such, it appears as if there is a drop from 1091 deaths on 5/15 to 878 on 5/16 in our data.",
    covid19Site: "https://covid19.colorado.gov/case-data",
    covid19SiteSecondary: "https://covid19.colorado.gov/covid-19-data",
    covid19SiteTertiary: "https://covid19.colorado.gov/hospital-data",
    twitter: "@cdphe",
    covid19SiteOld:
      "https://www.colorado.gov/pacific/cdphe/2019-novel-coronavirus",
    name: "Colorado",
    fips: "08",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "CT",
    notes:
      'Negative = Total - Positive.  \nPositives occasionally update before totals do; we do not revise negatives down, keep the last calculated negative.\nAs of May 24, Connecticut is reporting PCR specimens tested. Because some people may be tested more than once, this number is probably higher than the number of people tested.\nOn May 27, CT reported they had "removed 356 cases and 808 tests...which were identified as duplicates in the system." When combined with actual new cases, these removals resulted in a net reduction of 15 positives on 5/27.\nAs of May 29, CHA changed to only reporting the number of patients with laboratory-confirmed COVID-19; data for previous dates include patients with laboratory-confirmed or suspected COVID-19. This impacts the numbers for cumulative hospitalizations and recoveries.\nOn June 18, CT reported that "Please note that 81 new cases were reported in the past 24-hours; 70 previously reported cases were removed from the total counts due to correction of data errors."\nOn June 24, CT removed 2770 previously reported tests due to correction of a data error. Negatives decreased as a result.',
    covid19Site: "https://data.ct.gov/coronavirus",
    covid19SiteSecondary: "",
    covid19SiteTertiary: "",
    twitter: "@ctdph",
    covid19SiteOld: "https://portal.ct.gov/Coronavirus",
    name: "Connecticut",
    fips: "09",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "DC",
    notes:
      "Positive and Negative include both public and commercial labs. As of April 27, District of Columbia is reporting people tested.\nTotal tests reported by DC dropped by about 11,000 from 5/24 to 5/25.",
    covid19Site:
      "https://coronavirus.dc.gov/page/coronavirus-surveillance-data",
    covid19SiteSecondary: "",
    covid19SiteTertiary: "",
    twitter: "@_DCHealth",
    covid19SiteOld: "https://coronavirus.dc.gov/",
    name: "District Of Columbia",
    fips: "11",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "DE",
    notes:
      "As of April 27, Delaware is reporting people tested.\nOn April 11, Delaware revised down negatives from 10415 to 9624",
    covid19Site:
      "https://dhss.delaware.gov/dhss/dph/epi/2019novelcoronavirus.html",
    covid19SiteSecondary: "",
    covid19SiteTertiary: "",
    twitter: "@Delaware_DHSS",
    covid19SiteOld:
      "https://dhss.delaware.gov/dhss/dph/epi/2019novelcoronavirus.html",
    name: "Delaware",
    fips: "10",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "FL",
    notes:
      'We report using the raw data provided by FDOH but we include both Florida residents and non-residents.\nOn March 26, the dashboard stopped including non-residents in its visible counts, but they\'re still tracked behind the scenes.  \nOn March 21, negatives jumped due to a methodology change: tests of people not investigated as PUIs are now included. \nAs of May 15, Florida is reporting both specimens (PCR and antibody) and people tested. We report positives and negatives based on the number of people tested. However, the "people tested" number reported on Florida\'s dashboard has come into question as of May 31, because this number is not fully de-duplicated. Florida\'s report abbreviations that: "People tested on multiple days will be included for each day a new result was received."',
    covid19Site:
      "https://experience.arcgis.com/experience/96dd742462124fa0b38ddedb9b25e429/",
    covid19SiteSecondary: "https://o-vid.herokuapp.com/florida",
    covid19SiteTertiary:
      "https://bi.ahca.myflorida.com/t/ABICC/views/Public/HospitalBedsCounty?%3AshowAppBanner=false&%3Adisplay_count=n&%3AshowVizHome=n&%3Aorigin=viz_share_link&%3AisGuestRedirectFromVizportal=y&%3Aembed=y",
    twitter: "@HealthyFla",
    covid19SiteOld:
      "http://www.floridahealth.gov/diseases-and-conditions/COVID-19/",
    name: "Florida",
    fips: "12",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "GA",
    notes:
      'Positive includes deaths. Positives occasionally update before totals.\nWe use the abbreviation\'s "as of" time as our Update Time. \nAs of May 16, Georgia is reporting specimens tested. Because some people may be tested more than once, this number is probably higher than the number of people tested. \nAs of May 27, GA started separating serology tests from PCR. Total test numbers were impacted by around 74,000.\nGA makes changes to its cumulative case counts for previous dates, so its historical time series and trends for case counts might not match ours. When we can, we will update our own historical time series to match theirs.',
    covid19Site: "https://dph.georgia.gov/covid-19-daily-status-report",
    covid19SiteSecondary:
      "https://augustagis.maps.arcgis.com/apps/opsdashboard/index.html#/4eec20925b6b4f338368df0ffcba472d",
    covid19SiteTertiary: "",
    twitter: "@GaDPH",
    covid19SiteOld: "https://dph.georgia.gov/novelcoronavirus",
    name: "Georgia",
    fips: "13",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "GU",
    notes:
      "Testing data from Guam's Situation Report is often older than case data in Guam's press releases, so there are sometimes more cases than test results. On May 4, Guam adjusted cases down from 150 to 149 because they found that the case was double counted, number of recovered was also adjusted down because 7 people were returned to isolation.\nGuam's counts include 11 people tested at the San Diego naval base.\nAs of May 25, Guam is reporting people tested.",
    covid19Site: "http://dphss.guam.gov/covid-19/",
    covid19SiteSecondary: "https://ghs.guam.gov/coronavirus-covid-20",
    covid19SiteTertiary: "",
    twitter: "@guamdphss",
    covid19SiteOld: "https://ghs.guam.gov/coronavirus-covid-19",
    name: "Guam",
    fips: "66",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "HI",
    notes:
      "Data now pulled from their [new Dashboard Project](https://www.hawaiidata.org/covid19).\nAs of May 16, Hawaii is reporting people tested\nOn May 23, Hawaii revised down 5 cases due to updated testing information.\nOn May 25, Hawaii revised down 1 cumulative hospitalization patient.\nOn June 5, Hawaii revised down 1 case released from isolation.\nAs of June 1, Hawaii started reporting total number of unique people tested. Total tests impacted by around 6,000.",
    covid19Site: "https://health.hawaii.gov/coronavirusdisease2019/",
    covid19SiteSecondary:
      "https://health.hawaii.gov/coronavirusdisease2019/what-you-should-know/current-situation-in-hawaii/",
    covid19SiteTertiary: "",
    twitter: "@HIgov_Health",
    covid19SiteOld:
      "https://health.hawaii.gov/docd/advisories/novel-coronavirus-2019/",
    name: "Hawaii",
    fips: "15",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "IA",
    notes:
      "Not all commercial labs report negatives to Iowa, as per their guidance. As of April 27, Iowa is reporting people tested.\nAs of May 19, Iowa is separating out the numbers of people tested with PCR and antibody tests; we report the number of people tested with PCR. Total testing numbers might be impacted.",
    covid19Site: "https://coronavirus.iowa.gov/",
    covid19SiteSecondary: "https://coronavirus.iowa.gov/pages/access",
    covid19SiteTertiary: "",
    twitter: "@IAPublicHealth",
    covid19SiteOld:
      "https://idph.iowa.gov/Emerging-Health-Issues/Novel-Coronavirus",
    name: "Iowa",
    fips: "19",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "ID",
    notes:
      'Negative = Totals - Positives.  Positives sometimes update before totals do. \nTotal includes Oregon residents tested in Idaho.  \nAs of April 9, Idaho separately reports both probable and confirmed cases. Idaho reports test counts in specimens. \nOn June 5, Idaho received a large batch of previously unreported tests.\nOn July 3, ID revised down the Recovered number by about 1,500 noting that "an error in auto-calculation was discovered."',
    covid19Site: "https://coronavirus.idaho.gov/",
    covid19SiteSecondary:
      "https://public.tableau.com/views/DPHIdahoCOVID-19Dashboard_V2/Story1?%3Aembed=y&%3AshowVizHome=no&%3Adisplay_count=y&%3Adisplay_static_image=y&%3AbootstrapWhenNotified=true",
    covid19SiteTertiary: "",
    twitter: "@IDHW",
    covid19SiteOld: "https://coronavirus.idaho.gov/",
    name: "Idaho",
    fips: "16",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "IL",
    notes:
      "Illinois counts deaths in positives. \nAs of May 25, Illinois is reporting PCR specimens tested. Because some people may be tested more than once, this number is probably higher than the number of people tested. On 6/17/2020, IL reported no change in probable cases and deaths.",
    covid19Site:
      "http://www.dph.illinois.gov/topics-services/diseases-and-conditions/diseases-a-z-list/coronavirus",
    covid19SiteSecondary: "",
    covid19SiteTertiary: "",
    twitter: "@IDPH",
    covid19SiteOld:
      "http://www.dph.illinois.gov/topics-services/diseases-and-conditions/diseases-a-z-list/coronavirus",
    name: "Illinois",
    fips: "17",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "IN",
    notes:
      "Negative = Total – Positive. Negatives are a lower bound, and may not include all private labs. On 6/23 and 6/24 reported cumulative patients admitted to ICU decreased for unknown reasons.",
    covid19Site: "https://www.in.gov/isdh/28470.htm",
    covid19SiteSecondary: "",
    covid19SiteTertiary: "",
    twitter: "@abbreviationhealthin",
    covid19SiteOld: "https://www.in.gov/isdh/28470.htm",
    name: "Indiana",
    fips: "18",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "KS",
    notes:
      "On April 23rd, Kansas reported 112 deaths.  On April 24th, they revised this down to 111 deaths.\nAs of May 7, 2020, confirmed and probable cases are included in the case totals.\nFrom July 1-3 we reported incorrect numbers for KS Positive Cases (PCR). We have corrected the error.",
    covid19Site: "https://www.coronavirus.kdheks.gov/160/COVID-19-in-Kansas",
    covid19SiteSecondary: "http://www.kdheks.gov/coronavirus/",
    covid19SiteTertiary: "",
    twitter: "@kdhe",
    covid19SiteOld: "http://www.kdheks.gov/coronavirus/",
    name: "Kansas",
    fips: "20",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "KY",
    notes:
      "Negative = Total - Positive.\nPositives sometimes update before totals do; when this happens, we keep the last calculated negative. As of April 27, Kentucky is reporting people tested.\nOn May 23, KY revised down the total number of tests.\nAs of May 27, KY started separating serology tests from PCR. This might cause the number of total tests to go down compared to the previous day.\nOn July 1, KY revised down the cumulative hospitalizations by 12",
    covid19Site:
      "https://kygeonet.maps.arcgis.com/apps/opsdashboard/index.html#/543ac64bc40445918cf8bc34dc40e334",
    covid19SiteSecondary: "https://chfs.ky.gov/agencies/dph/Pages/covid19.aspx",
    covid19SiteTertiary:
      "https://chfs.ky.gov/agencies/dph/covid19/COVID19DailyReport.pdf",
    twitter: "@CHFSKy",
    covid19SiteOld: "https://chfs.ky.gov/agencies/dph/Pages/covid19.aspx",
    name: "Kentucky",
    fips: "21",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "LA",
    notes:
      'Total = abbreviation Lab + Commercial Lab, Negative = Total - Positive\nFrom 4/20 through 4/24 LA paused reporting commercial testing data to do a review of the data. On June 18, a notice on LA dashboard said "LDH is reviewing all data and will not be updating its dashboard today."\nOn June 19th, LDH removed 1666 duplicate and non resident cases after implementing a new de-duplicaton process.',
    covid19Site: "http://ldh.la.gov/Coronavirus/",
    covid19SiteSecondary:
      "https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Combined_COVID_Reporting/FeatureServer/0/query?groupByFieldsForStatistics=Measure&outStatistics=%5B%7B%27statisticType%27%3A+%27sum%27%2C+%27onStatisticField%27%3A+%27Value%27%7D%5D&where=1%3D1",
    covid19SiteTertiary: "",
    twitter: "@LADeptHealth",
    covid19SiteOld: "http://ldh.la.gov/Coronavirus/",
    name: "Louisiana",
    fips: "22",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "MA",
    notes:
      'MA reports both the number of tests performed and the number of people tested. Both data points are available in our API, but MA data on our web pages is reported in units of people tested. On June 30, MA decreased the number of cumulative hospitalization, confirmed and probable deaths "due to ongoing data cleaning which identifies and removes duplicate reports." ',
    covid19Site:
      "https://www.mass.gov/info-details/covid-19-cases-quarantine-and-monitoring",
    covid19SiteSecondary: "",
    covid19SiteTertiary: "",
    twitter: "@massdph",
    covid19SiteOld:
      "https://www.mass.gov/resource/information-on-the-outbreak-of-coronavirus-disease-2019-covid-19",
    name: "Massachusetts",
    fips: "25",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "MD",
    notes: "Didn't report negatives between 3/12 and 3/28.",
    covid19Site: "https://coronavirus.maryland.gov/",
    covid19SiteSecondary: "",
    covid19SiteTertiary: "",
    twitter: "@MDHealthDept",
    covid19SiteOld:
      "https://phpa.health.maryland.gov/Pages/Novel-coronavirus.aspx",
    name: "Maryland",
    fips: "24",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "ME",
    notes:
      "As of May 13, Maine is reporting total specimens tested; this number is updated once a week on Wednesdays. Because some people may be tested more than once, this number is probably higher than the number of people tested.\nAs of May 20, Maine is separating out PCR tests and antibody tests; we report the number of PCR tests. Total testing numbers might be impacted. On 6/23, Maine began reporting the dates of cases, deaths, recoveries, and hospitalizations on the day they occurred instead of the day the event was reported. On 6/23, Maine began providing separate figures for confirmed and probable deaths.",
    covid19Site:
      "https://www.maine.gov/dhhs/mecdc/infectious-disease/epi/airborne/coronavirus/data.shtml",
    covid19SiteSecondary: "",
    covid19SiteTertiary: "",
    twitter: "@mainedhhs",
    covid19SiteOld:
      "https://www.maine.gov/dhhs/mecdc/infectious-disease/epi/airborne/coronavirus.shtml",
    name: "Maine",
    fips: "23",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "MI",
    notes:
      "Michigan has reported each day's negative results since 3/10 but has never totaled them. We sum all the negative results and report the total. Michigan reports specimens tested instead of people tested. \nRecovered counts are updated once a week. \nAs of May 16, Michigan uses 'total specimens' reported on lab testing page\nAs of May 23, Michigan is separating out antibody and PCR tests; we report the number of PCR tests. Total testing numbers might be impacted. As of June 5, positives include both confirmed and probable cases of COVID-19, as reported by the Michigan Department of Health & Human Services.\nOn 6/11 MI DDHS provided an XLS with historical time series and we updated our data  to reflect the correct dates of probable and confirmed cases and deaths. \nAs of 7/7, MI updates its death figures three times a week after conducting reviews of death certificates. As a result, new deaths may not always reflect deaths in the past 24 hours.",
    covid19Site:
      "https://www.michigan.gov/coronavirus/0,9753,7-406-98163_98173---,00.html",
    covid19SiteSecondary:
      "https://www.michigan.gov/coronavirus/0,9753,7-406-98159-523641--,00.html",
    covid19SiteTertiary: "",
    twitter: "@MichiganHHS",
    covid19SiteOld: "https://www.michigan.gov/coronavirus",
    name: "Michigan",
    fips: "26",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "MN",
    notes:
      "Since March 23, Negative = Total - Positive.\nAs of June 5, Minnesota reports specimens tested; because some people may be tested more than once, this number may be higher than the number of people tested.",
    covid19Site:
      "https://www.health.abbreviation.mn.us/diseases/coronavirus/situation.html",
    covid19SiteSecondary: "",
    covid19SiteTertiary: "",
    twitter: "@mnhealth",
    covid19SiteOld:
      "https://www.health.abbreviation.mn.us/diseases/coronavirus/index.html",
    name: "Minnesota",
    fips: "27",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "MO",
    notes:
      "Negative = Total - Positive. As of April 27, Missouri is reporting people tested.\nAs of May 22, Missouri is separating out the numbers of people tested with PCR and antibody tests; we report the number of people tested with PCR tests. Total tests might be impacted.",
    covid19Site:
      "https://health.mo.gov/living/healthcondiseases/communicable/novel-coronavirus/results.php",
    covid19SiteSecondary:
      "https://missouri-coronavirus-gis-hub-mophep.hub.arcgis.com/",
    covid19SiteTertiary: "",
    twitter: "@HealthyLivingMo",
    covid19SiteOld:
      "https://health.mo.gov/living/healthcondiseases/communicable/novel-coronavirus/",
    name: "Missouri",
    fips: "29",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "MP",
    notes:
      "As of May 16, Northern Mariana Islands is reporting specimens tested. Because some people may be tested more than once, this number is probably higher than the number of people tested",
    covid19Site: "https://www.chcc.gov.mp/coronavirusinformation.php",
    covid19SiteSecondary:
      "https://cnmichcc.maps.arcgis.com/apps/opsdashboard/index.html#/4061b674fc964efe84f7774b7979d2b5",
    covid19SiteTertiary: "",
    twitter: "@cnmichcc",
    covid19SiteOld: "https://www.chcc.gov.mp/coronavirusinformation.php",
    name: "Northern Mariana Islands",
    fips: "69",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "MS",
    notes:
      'Negatives = Total - Positives.\nHospitalizations are calculated by calculating multiplying % of hospitalized times total cases, pending clarification from the abbreviation. Recoveries are estimated, and updated twice weekly.\nAs of May 23, Mississippi is separating out PCR and antibody tests; we report PCR specimens tested. Total tests might be impacted. Mississippi notes that hospitalization data for May 23 is incomplete.\nOn June 11th, due to a technical issue, Mississippi did not provide new updates. Beginning June 17th MS paused reporting data: "Our daily COVID-19 update will be limited as we work to resolve technical problems in our data reporting system." Current lab-confirmed hospitalization cases from MSDH Twitter 6/19. \nAs of 6/21 all case and testing data was last updated 6/16 at 18:00. Currently hospitalized, in ICU, and on ventilator data was updated 6/20. \nOn 6/22 MS added five days\' backlog of case and death data.\nOn 7/7 we erroneously reported additional Negatives for MS. We have corrected the error.',
    covid19Site: "https://msdh.ms.gov/msdhsite/_static/14,0,420.html",
    covid19SiteSecondary: "",
    covid19SiteTertiary: "",
    twitter: "@msdh",
    covid19SiteOld: "https://msdh.ms.gov/msdhsite/_static/14,0,420.html",
    name: "Mississippi",
    fips: "28",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "MT",
    notes:
      'Negative = Total - Positive.  The dashboard says that the data "as-of" is from the day previous - in this case we use current date + time = 0:00 On 6/17/2020 Cumulative Hospitalizations reported by Montana decreased from 79 to 78 with no explanation.',
    covid19Site:
      "https://montana.maps.arcgis.com/apps/MapSeries/index.html?appid=7c34f3412536439491adcc2103421d4b",
    covid19SiteSecondary:
      "https://dphhs.mt.gov/publichealth/cdepi/diseases/coronavirusmt/demographics",
    covid19SiteTertiary: "",
    twitter: "@dphhsmt",
    covid19SiteOld:
      "https://dphhs.mt.gov/publichealth/cdepi/diseases/coronavirusmt",
    name: "Montana",
    fips: "30",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "NC",
    notes:
      "Negative = Total tests* - total positives (where total tests include all data from public labs and partial data from hospital and commercial labs).",
    covid19Site: "https://www.ncdhhs.gov/covid-19-case-count-nc",
    covid19SiteSecondary: "",
    covid19SiteTertiary: "",
    twitter: "@ncdhhs",
    covid19SiteOld:
      "https://www.ncdhhs.gov/divisions/public-health/coronavirus-disease-2019-covid-19-response-north-carolina",
    name: "North Carolina",
    fips: "37",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "ND",
    notes:
      "As of May 2, North Dakota is reporting people tested. On 5/3, ND began providing counts of deaths for lab-confirmed individuals with death records still pending, and lab-confirmed individuals who died but not due to COVID. As of 7/1, we have edited our figures to exclude these numbers from our death counts, resulting in an apparent drop from 24 deaths on 5/2 to 16 on 5/3. On 6/18, ND revised down its confirmed death count from 66 to 64. On \n6/24, ND revised its confirmed death count from 67 to 66 to remove an \nout-of-abbreviation case.",
    covid19Site:
      "https://www.health.nd.gov/diseases-conditions/coronavirus/north-dakota-coronavirus-cases",
    covid19SiteSecondary: "",
    covid19SiteTertiary: "",
    twitter: "@NDDOH",
    covid19SiteOld: "https://www.health.nd.gov/diseases-conditions/coronavirus",
    name: "North Dakota",
    fips: "38",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "NE",
    notes:
      "The count of 56 on 4/27 included a death erroneously entered into NE’s electronic system. NE removed it from the total count on 4/28\nWe do not currently track it, but partial hospitalization data are available from [Douglas County](https://dogis.maps.arcgis.com/apps/opsdashboard/index.html#/21bec056a9a6449abcca89a329868fd6)\n\nOn 7/8 deaths decreased by one with no explanation.",
    covid19Site:
      "https://experience.arcgis.com/experience/ece0db09da4d4ca68252c3967aa1e9dd",
    covid19SiteSecondary: "",
    covid19SiteTertiary: "",
    twitter: "@NEDHHS",
    covid19SiteOld: "http://dhhs.ne.gov/Pages/Coronavirus.aspx",
    name: "Nebraska",
    fips: "31",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "NH",
    notes:
      "On May 4, New Hampshire revised the recovered down from 1107 to 1017. Negative count is from the four largest labs. Pending count is from the Public Health Laboratories only. As of April 27, New Hampshire is reporting people tested.\nAs of May 25, New Hampshire is separating out the numbers of people tested with PCR and antibody tests; we report the number of people tested with PCR tests.\nOn June 13, New Hampshire revised its hospitalizations down from 504 to 503, removing cases that were not New Hampshire residents.",
    covid19Site: "https://www.dhhs.nh.gov/dphs/cdcs/2019-ncov.htm",
    covid19SiteSecondary: "https://www.nh.gov/covid19/dashboard/summary.htm",
    covid19SiteTertiary: "",
    twitter: "@NHPubHealth",
    covid19SiteOld: "https://www.dhhs.nh.gov/dphs/cdcs/2019-ncov.htm",
    name: "New Hampshire",
    fips: "33",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "NJ",
    notes:
      "Positive count includes deaths. Hospitalization + ICU counts include both positive cases and persons under investigation. As of May 11, New Jersey is reporting total PCR specimens tested.\nOn May 16, New Jersey had a significant jump in recovered (about 7,000) due to backfilling previous days after a shift in how this figure was reported on April 28.\nOn June 25th, New Jersey reported 1854 probable deaths that occured in the past. This causes a perecived increase in the daily number of deaths.\nOn July 8, New Jersey reported another 89 probable deaths that occurred previously. This again artificially inflated the day's reported death toll. We are waiting to receive a dated time series from NJ to properly backfill the data.",
    covid19Site: "https://covid19.nj.gov/#live-updates",
    covid19SiteSecondary:
      "https://maps.arcgis.com/apps/MapSeries/index.html?appid=c2efd1898e48452e83d7218329e953d7&entry=2",
    covid19SiteTertiary: "",
    twitter: "@NJDeptofHealth",
    covid19SiteOld: "https://www.nj.gov/health/cd/topics/ncov.shtml",
    name: "New Jersey",
    fips: "34",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "NM",
    notes:
      "[Hospitalization from NMDH](https://cv.nmhealth.org/newsroom/). Hospitalization count is people in New Mexico hospitals: it includes people who tested positive out of abbreviation but are hospitalized in New Mexico, and excludes New Mexicans who tested positive in abbreviation and transferred to a hospital out of abbreviation. As of April 27, New Mexico is reporting people tested. On 5/28 NM reported ~1100 less tests than the day before. We're unsure of the reason.",
    covid19Site: "https://cvprovider.nmhealth.org/public-dashboard.html",
    covid19SiteSecondary: "",
    covid19SiteTertiary: "",
    twitter: "@NMDOH",
    covid19SiteOld: "https://cv.nmhealth.org/",
    name: "New Mexico",
    fips: "35",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "NV",
    notes:
      'Individual data fields have different update times; we use the latest as our "Last Update" time. Hospitalizations, ICU bed usage, and ventilator usage are reported as a percentage of total capacity in daily situation reports, but total capacity is not published, so we do not estimate those numbers. As of May 6, Nevada is reporting both specimens and people tested. We report positives and negatives based on the number of people tested. ',
    covid19Site:
      "https://app.powerbigov.us/view?r=eyJrIjoiMjA2ZThiOWUtM2FlNS00MGY5LWFmYjUtNmQwNTQ3Nzg5N2I2IiwidCI6ImU0YTM0MGU2LWI4OWUtNGU2OC04ZWFhLTE1NDRkMjcwMzk4MCJ9",
    covid19SiteSecondary: "http://dpbh.nv.gov/coronavirus/",
    covid19SiteTertiary: "",
    twitter: "@dhhsnevada",
    covid19SiteOld: "http://dpbh.nv.gov/coronavirus/",
    name: "Nevada",
    fips: "32",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "NY",
    notes:
      "Numbers come from [press conference](https://www.governor.ny.gov). \nRecovered = discharged. As of April 27, New York is reporting people tested. Cumulative hospitalized and recovered are calculated using the 3 day average change in hospitalization benchmarked from April 12.\nThere is a significant gap between deaths reported by New York City and New York abbreviation. As of 6/1, the difference between the abbreviation reported deaths, which we use, and the NYC deaths was 5740",
    covid19Site:
      "https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases",
    covid19SiteSecondary:
      "https://covid19tracker.health.ny.gov/views/NYS-COVID19-Tracker/NYSDOHCOVID-19Tracker-Fatalities?%3Aembed=yes&%3Atoolbar=no&%3Atabs=n",
    covid19SiteTertiary:
      "https://www.governor.ny.gov/news/governor-cuomo-updates-new-yorkers-abbreviations-progress-during-covid-19-pandemic",
    twitter: "@healthnygov",
    covid19SiteOld:
      "https://www.health.ny.gov/diseases/communicable/coronavirus/",
    name: "New York",
    fips: "36",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "OH",
    notes:
      "Ohio now publishes detailed [Key Metrics](https://coronavirus.ohio.gov/wps/portal/gov/covid-19/dashboards/key-metrics/cases)",
    covid19Site: "https://coronavirus.ohio.gov/wps/portal/gov/covid-19/",
    covid19SiteSecondary:
      "https://coronavirus.ohio.gov/wps/portal/gov/covid-19/dashboards/key-metrics/cases",
    covid19SiteTertiary: "",
    twitter: "@OHdeptofhealth",
    covid19SiteOld:
      "https://odh.ohio.gov/wps/portal/gov/odh/know-our-programs/Novel-Coronavirus/welcome/",
    name: "Ohio",
    fips: "39",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "OK",
    notes:
      '[Executive Order Reports](https://coronavirus.health.ok.gov/executive-order-reports)\nfirst reported [comprehensive test results](https://coronavirus.health.ok.gov/articles/new-data-private-labs-show-tenfold-increase-covid-19-tests-administered-oklahoma-dating) on 4/6. We exclude "Positive (Out-of-abbreviation)" results, as we assume these are isolated outside the abbreviation.\nAs of April 27, Oklahoma is reporting specimens tested. Because some people may be tested more than once, this number is probably higher than the number of people tested.\nDue to differences in reporting, the number of negative tests might include inconclusive tests',
    covid19Site: "https://coronavirus.health.ok.gov/",
    covid19SiteSecondary: "",
    covid19SiteTertiary: "",
    twitter: "@HealthyOklahoma",
    covid19SiteOld: "https://coronavirus.health.ok.gov",
    name: "Oklahoma",
    fips: "40",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "OR",
    notes:
      "Total includes Oregon & Montana residents tested in Idaho. As of April 27, Oregon is reporting people tested. \nFor June 15, we report deaths, cases and negatives from Oregon’s press release from [June 14](https://www.oregon.gov/oha/ERD/Pages/Oregon-reports-101-new-confirmed-presumptive-COVID-19-cases-2-new-deaths.aspx). On 6/20/20, per weekend report, two cases in Polk County previously reported as COVID-19 were determined to be non-COVID-19 and numbers updated to reflect the change.",
    covid19Site:
      "https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx",
    covid19SiteSecondary:
      "https://public.tableau.com/profile/oregon.health.authority.covid.19#!/vizhome/OregonCOVID-19Update/CaseandTesting",
    covid19SiteTertiary: "",
    twitter: "@OHAOregon",
    covid19SiteOld:
      "https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx",
    name: "Oregon",
    fips: "41",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "PA",
    notes:
      "County level data may differ from the abbreviation totals. We are not adding deaths back into positives. On 4/23, Pennsylvania revised down its total deaths from 1,622 to 1,421 to exclude some probable deaths that needed further confirmation to be linked to COVID 19.",
    covid19Site:
      "https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx",
    covid19SiteSecondary:
      "https://www.arcgis.com/apps/opsdashboard/index.html#/85054b06472e4208b02285b8557f24cf",
    covid19SiteTertiary: "",
    twitter: "@PAHealthDept",
    covid19SiteOld:
      "https://www.health.pa.gov/topics/disease/Pages/Coronavirus.aspx",
    name: "Pennsylvania",
    fips: "42",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "PR",
    notes:
      "Death counts include both confirmed and presumed COVID deaths.\nWhen it is reported, we add inconclusive results to pending.\nPositive counts reflect individual who test positive, combining both PCR and antibody.\nOn 4/22 Puerto Rico revised down its positive count from 1,298 to 915 to exclude double-counted cases.\nPuerto Rico reported negative testing numbers through April 23, after no updates we removed these from our data on May 6. Total test numbers were impacted by around 9,000.\nOn July 7, we added back negative testing numbers based on sporadic press reports in May and June.",
    covid19Site: "https://estadisticas.pr/en/covid-19",
    covid19SiteSecondary:
      "https://bioseguridad.maps.arcgis.com/apps/opsdashboard/index.html#/3bfb64c9a91944bc8c41edd8ff27e6df",
    covid19SiteTertiary: "",
    twitter: "@DeptSaludPR",
    covid19SiteOld: "http://www.salud.gov.pr/Pages/coronavirus.aspx",
    name: "Puerto Rico",
    fips: "72",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "RI",
    notes:
      "Recovered numbers are from hospital discharges. On 7/8 RI started reporting test numbers in people in addition to specimens. We backfilled the data from their CSV. Since people is the default reporting metric in CTP for tests, this represents a drop in tests from previous reporting of approximately 50k tests. The number of PCR tests, positives, and negatives is available in our API.",
    covid19Site: "https://health.ri.gov/data/covid-19/",
    covid19SiteSecondary:
      "https://docs.google.com/spreadsheets/d/1c2QrNMz8pIbYEKzMJL7Uh2dtThOJa2j1sSMwiDo5Gz4/edit#gid=264100583",
    covid19SiteTertiary: "",
    twitter: "@rihealth",
    covid19SiteOld: "https://health.ri.gov/diseases/respiratory/?parm=163",
    name: "Rhode Island",
    fips: "44",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "SC",
    notes:
      "Hospitalization and Recovery Rate come from demographic data released every Tuesday and Friday afternoon.\nAs of May 22, South Carolina is reporting specimens tested. Because some people may be tested more than once, this number is probably higher than the number of people tested.\nAs of June 11, South Carolina is separating out PCR and antibody tests; we report the number of PCR tests. Total test numbers were impacted by around 22,000.",
    covid19Site:
      "https://scdhec.gov/health/infectious-diseases/viruses/coronavirus-disease-2019-covid-19/monitoring-testing-covid-19",
    covid19SiteSecondary:
      "https://www.scdhec.gov/infectious-diseases/viruses/coronavirus-disease-2019-covid-19/sc-demographic-data-covid-19",
    covid19SiteTertiary: "",
    twitter: "@scdhec",
    covid19SiteOld:
      "https://scdhec.gov/health/infectious-diseases/viruses/coronavirus-disease-2019-covid-19",
    name: "South Carolina",
    fips: "45",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "SD",
    notes: null,
    covid19Site: "https://doh.sd.gov/news/Coronavirus.aspx",
    covid19SiteSecondary: "",
    covid19SiteTertiary: "",
    twitter: "@SDDOH",
    covid19SiteOld: "https://doh.sd.gov/news/Coronavirus.aspx",
    name: "South Dakota",
    fips: "46",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "TN",
    notes:
      "Tennessee now provides positive and negative test results from all laboratories. On April 5, the abbreviation reported a decline in recoveries. As of June 7, positives include both confirmed and probable cases of COVID-19 reported to or tested by the Tennessee Department of Health. As of July 3, hospitalizations include both positive and pending cases. On July 3, we updated hospitalizations from March 31 through July 3 to include both positive and pending cases.",
    covid19Site: "https://www.tn.gov/health/cedep/ncov.html",
    covid19SiteSecondary:
      "https://apps.health.tn.gov/AEM_embed/TDH-2019-Novel-Coronavirus-Epi-and-Surveillance.pdf#toolbar=0",
    covid19SiteTertiary:
      "https://www.tn.gov/health/cedep/ncov/data/hospitalization-data/current-covid-hospitalizations.html",
    twitter: "@TNDeptofHealth",
    covid19SiteOld: "https://www.tn.gov/health/cedep/ncov.html",
    name: "Tennessee",
    fips: "47",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "TX",
    notes:
      'As of May 16, Texas is reporting mostly specimens tested, except for the small number of tests performed by public labs, which are de-duplicated.\nAs of May 23, Texas is separating out PCR and antibody tests; we report the number of PCR tests. Total tests might be impacted. \nTX notes that "The reported cases for June 16 include 2,622 new cases and 1,476 cases that were previously diagnosed among Texas Department of Criminal Justice inmates but that had not been reported by local health departments (887 from Anderson County and 589 from Brazoria County)."',
    covid19Site:
      "https://txdshs.maps.arcgis.com/apps/opsdashboard/index.html#/ed483ecd702b4298ab01e8b9cafc8b83",
    covid19SiteSecondary:
      "https://dshs.texas.gov/news/updates.shtm#coronavirus",
    covid19SiteTertiary:
      "https://txdshs.maps.arcgis.com/apps/opsdashboard/index.html#/0d8bdf9be927459d9cb11b9eaef6101f",
    twitter: "@TexasDSHS",
    covid19SiteOld: "https://dshs.texas.gov/coronavirus/",
    name: "Texas",
    fips: "48",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "UT",
    notes:
      "Positive count includes non-Utah residents. Negative = Total - Positive. According to the abbreviation, negative test results may lag for up to 72 hours, and recovered persons is estimated by cases whose first positive laboratory test was reported at least 21 days ago, excluding deaths. As of April 27, Utah is reporting people tested. As of June 11, Utah reports a combined case count for total intubated patients and patients on a ventilator. We report this figure as cumulative on ventilator.",
    covid19Site: "https://coronavirus-dashboard.utah.gov/",
    covid19SiteSecondary:
      "https://coronavirus-dashboard.utah.gov/#hospitalizations",
    covid19SiteTertiary: "",
    twitter: "@utahdepofhealth",
    covid19SiteOld: "https://health.utah.gov/coronavirus",
    name: "Utah",
    fips: "49",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "VA",
    notes:
      'Virginia hospitalization statistics from [Hospital dashboard](https://www.vhha.com/communications/virginia-hospital-covid-19-data-dashboard/)  We assume the count "hospitalized in the ICU" includes the count "currently on a ventilator." Cumulative Hospitalized is computed from currently hospitalized + discharged on the Virginia Hospitals dashboard. \nAs of May 15, Virginia is reporting specimens tested; including both a value for PCR tests only and all tests (PCR and antibody tests combined). We report the number of PCR tests. Total tests may be impacted.',
    covid19Site:
      "https://public.tableau.com/views/VirginiaCOVID-19Dashboard/VirginiaCOVID-19Dashboard?:embed=yes&:display_count=yes&:showVizHome=no&:toolbar=no",
    covid19SiteSecondary:
      "https://www.vhha.com/communications/virginia-hospital-covid-19-data-dashboard/",
    covid19SiteTertiary: "",
    twitter: "@vdhgov",
    covid19SiteOld:
      "http://www.vdh.virginia.gov/surveillance-and-investigation/novel-coronavirus/",
    name: "Virginia",
    fips: "51",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "VI",
    notes: "Virgin Islands: Positive, Negative, and Pending provided. ",
    covid19Site: "https://doh.vi.gov/covid19usvi",
    covid19SiteSecondary: "https://www.covid19usvi.com",
    covid19SiteTertiary: "",
    twitter: "@usvidoh",
    covid19SiteOld: "https://doh.vi.gov/",
    name: "US Virgin Islands",
    fips: "78",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "VT",
    notes:
      "Negative = (Total Tested - Positives). VT reports both Currently Hospitalized (implicitly, confirmed cases only) and Hospitalized Under Investigation. For Currently Hospitalized, we sum these two numbers. As of May 2, Vermont is reporting people tested.\nBetween May 15 and May 16, Vermont decreased their total tests by about 1,000; as of May 16 it is unclear if this was a typo or a revision of a previously preliminary count.",
    covid19Site:
      "https://experience.arcgis.com/experience/85f43bd849e743cb957993a545d17170",
    covid19SiteSecondary:
      "https://www.healthvermont.gov/response/coronavirus-covid-19/current-activity-vermont#dashboard",
    covid19SiteTertiary: "",
    twitter: "@healthvermont",
    covid19SiteOld:
      "https://www.healthvermont.gov/response/infectious-disease/2019-novel-coronavirus",
    name: "Vermont",
    fips: "50",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "WA",
    notes:
      "Washington reports confirmed cases, laboratory tests, and deaths as of the previous day. WA did not report new negative test results between March 31 and April 15.\nOn April 18, data cleaning removed 190 confirmed cases that were discovered to be out of abbreviation residents tested in WA labs. As of April 27, Washington is reporting people tested. \nOn June 18, due to a previous mistake in reporting negative cases, Washington abbreviation revised down the total number of tests. Additionally, Washington abbreviation removed seven deaths from its counts where, though the individual who died tested positive, COVID was not a contributing cause in their death.\nOn June 22, we updated historic numbers of cases and tests from data on WA's dashboard. This update will temporarily cause an aritifical decline in cases and numbers between June 21 and June 22. ",
    covid19Site:
      "https://www.doh.wa.gov/Emergencies/NovelCoronavirusOutbreak2020COVID19/DataDashboard",
    covid19SiteSecondary: "https://www.doh.wa.gov/Emergencies/Coronavirus",
    covid19SiteTertiary: "",
    twitter: "@WADeptHealth",
    covid19SiteOld: "https://www.doh.wa.gov/Emergencies/Coronavirus",
    name: "Washington",
    fips: "53",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "WI",
    notes:
      "Negatives include only Wisconsin residents whose negative test results were reported electronically to DHS. This underestimates total negative test results. \nDeaths must be reported by health providers or coroners, and recorded by local health departments, to be counted. As of April 27, Wisconsin is reporting people tested. \nOn March 30, WI revised down negatives from 16550 to 15856.\nOn June 25th, Wisconsin reported probable cases for the first time, including a large number of cases from earlier in the pandemic. Initially this manifested as a large single day jump in cases, but in the late evening we updated our historical case numbers to include these on the appropriate days based on historical data provided to us by the abbreviation. In early June, Wisconsin started breaking out its probable deaths. On 6/29, we caught these figures, and only have data for them past that date.",
    covid19Site: "https://www.dhs.wisconsin.gov/outbreaks/index.htm",
    covid19SiteSecondary: "https://www.dhs.wisconsin.gov/covid-19/data.htm",
    covid19SiteTertiary: "https://www.dhs.wisconsin.gov/covid-19/hosp-data.htm",
    twitter: "@DHSWI",
    covid19SiteOld: "https://www.dhs.wisconsin.gov/disease/covid-19.htm",
    name: "Wisconsin",
    fips: "55",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "WV",
    notes:
      "Negatives = Totals - Positives. As of April 16, WV reports hospitalization + ICU + ventilator counts from 49 of 55 counties. Before April 16, those counts were unreliable -- based on reported percentages of completed investigations, an unpublished number.\nAs of May 23, West Virginia is separating out PCR and antibody tests; we report the number of PCR tests. Total tests might be impacted. \nAs of July 4, WV makes changes to its previous data for antibody testing, so its historical time series might not match ours until we backfill our data to match theirs.",
    covid19Site:
      "https://dhhr.wv.gov/Coronavirus%20Disease-COVID-19/Pages/default.aspx",
    covid19SiteSecondary:
      "https://app.powerbigov.us/view?r=eyJrIjoiYmIyYTE0YWYtZDMyOS00YjAzLTgxZTItZDIyMmNlYTZmMWVkIiwidCI6IjhhMjZjZjAyLTQzNGEtNDMxZS04Y2FkLTdlYWVmOTdlZjQ4NCJ9&pageName=ReportSection3aff85597cada99d298f&pageName=ReportSection9f5bc3be6e9ebda92968",
    covid19SiteTertiary:
      "https://app.powerbigov.us/view?r=eyJrIjoiYmIyYTE0YWYtZDMyOS00YjAzLTgxZTItZDIyMmNlYTZmMWVkIiwidCI6IjhhMjZjZjAyLTQzNGEtNDMxZS04Y2FkLTdlYWVmOTdlZjQ4NCJ9&pageName=ReportSection4bb4fbc7d2bc2ad57511",
    twitter: "@WV_DHHR",
    covid19SiteOld:
      "https://dhhr.wv.gov/Coronavirus%20Disease-COVID-19/Pages/default.aspx",
    name: "West Virginia",
    fips: "54",
    pui: "",
    pum: false,
  },
  {
    abbreviation: "WY",
    notes:
      "Negatives = Total - Positive.\nThe week of April 6, WY began separating confirmed & suspected cases; we now report only confirmed. From April 7 to April 13, our recovered count may be slightly high, as WY combined recovered confirmed cases + recovered probable cases. \nOn April 22, total tests were revised down, resulting in a decrease in negatives. \nAs of April 28, we are including the suspected cases with the confirmed cases.\nAs of May 16, Wyoming is reporting specimens tested. Because some people may be tested more than once, this number is probably higher than the number of people tested.\nAs of June 19, Wyoming began reporting the number of people tested as well as the number of specimens tested. \nAs of June 20, we replaced test specimen data with people tested data. Total test numbers were impacted by around 10,000.",
    covid19Site:
      "https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/",
    covid19SiteSecondary:
      "https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/covid-19-map-and-statistics/",
    covid19SiteTertiary:
      "https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/covid-19-testing-data/",
    twitter: "@health_wyoming",
    covid19SiteOld:
      "https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/",
    name: "Wyoming",
    fips: "56",
    pui: "",
    pum: false,
  },
];
