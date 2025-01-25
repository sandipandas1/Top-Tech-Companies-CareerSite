// JavaScript arrays to hold all records
var allCompanies = [
    { CompanyName: "Oracle", CareersSite: "https://www.oracle.com/careers" },
    { CompanyName: "IBM", CareersSite: "https://www.ibm.com/careers" },
    { CompanyName: "Intel", CareersSite: "https://www.intel.com/jobs" },
    { CompanyName: "CGI", CareersSite: "https://www.cgi.com/en/careers" },
    { CompanyName: "LTIMindtree", CareersSite: "https://www.ltimindtree.com/careers/" },
    { CompanyName: "Accenture", CareersSite: "https://www.accenture.com/in-en/careers" },
    { CompanyName: "Google", CareersSite: "https://careers.google.com/" },
    { CompanyName: "Microsoft", CareersSite: "https://careers.microsoft.com/" },
    { CompanyName: "Amazon", CareersSite: "https://www.amazon.jobs/" },
    { CompanyName: "Cognizant", CareersSite: "https://careers.cognizant.com/global-en/" },
    { CompanyName: "Capgemini", CareersSite: "https://www.capgemini.com/in-en/careers/" },
    { CompanyName: "Happiest Minds", CareersSite: "https://careers.happiestminds.com/" },
    { CompanyName: "TCS", CareersSite: "https://www.tcs.com/careers" },
    { CompanyName: "Wipro", CareersSite: "https://careers.wipro.com/careers-home/" },
    { CompanyName: "Infosys", CareersSite: "https://www.infosys.com/careers/" },
    { CompanyName: "Dell Technologies", CareersSite: "https://jobs.dell.com/en?_gl=1*fmnqj1*_ga*MTAwMjA0NzQxLjE3MjUwMDcxMzA.*_ga_1234567890*MTcyNTUxODAwMC4xLjAuMTcyNTUxODAwMC4wLjAuNzEwNzgxMzg5*_fplc*cWlpeWR1eEY5S3VRM3NuMW1GVElJaUY3OTF4dnhqOFl3MzJZbmttV3J5cnB4WFVNU2h3R0VIdFBXQVNsN2JwWUFUQkxrTVQ1QXpnNTJWV2xaMHMlMkJRUSUyRjE4QzFURUt0Q1ZOeHhIazVodyUyRllDcXZpJTJCWloxRmtta3ByTVlNR2clM0QlM0Q.*_gcl_au*MzQzODAyODMyLjE3MjUwMDcxMzA.*FPAU*MzQzODAyODMyLjE3MjUwMDcxMzA." },
    { CompanyName: "HCL Tech", CareersSite: "https://www.hcltech.com/careers/careers-in-india" },
    { CompanyName: "Deloitte", CareersSite: "https://www.deloitte.com/global/en/careers.html" },
    { CompanyName: "Bosch", CareersSite: "https://www.bosch.com/careers/career-opportunities/" },
    { CompanyName: "Mphasis", CareersSite: "https://careers.mphasis.com/home.html" },
    { CompanyName: "Hexaware Technologies", CareersSite: "https://jobs.hexaware.com/#en/sites/CX_1" },
    { CompanyName: "Persistent Systems", CareersSite: "https://careers.persistent.com/" },
    { CompanyName: "Coforge", CareersSite: "https://careers.coforge.com/#!/" },
    { CompanyName: "Sonata Software", CareersSite: "https://www.sonata-software.com/careers" },
    { CompanyName: "KPIT Tech", CareersSite: "https://www.kpit.com/careers/" },
    { CompanyName: "Tech Mahindra", CareersSite: "https://careers.techmahindra.com/" },
    { CompanyName: "Genpact", CareersSite: "https://www.genpact.com/careers" },
    { CompanyName: "NTT Data", CareersSite: "https://www.nttdata.com/global/en/careers/search-jobs" },
    { CompanyName: "JPMorgan Chase & Co.", CareersSite: "https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/requisitions?keyword=Technology" },
    { CompanyName: "Carelon", CareersSite: "https://www.carelonglobal.in/careers" },
    { CompanyName: "Collabera", CareersSite: "https://collabera.com/job-search/" },
    { CompanyName: "Honeywell", CareersSite: "https://careers.honeywell.com/us/en/home" },
    { CompanyName: "Godrej Infotech", CareersSite: "https://www.godrejinfotech.com/Careers.aspx" },
    { CompanyName: "Adobe", CareersSite: "https://www.adobe.com/careers.html" },
    { CompanyName: "LinkedIn", CareersSite: "https://careers.linkedin.com/" },
    { CompanyName: "Spotify", CareersSite: "https://www.spotifyjobs.com/" },
    { CompanyName: "Zoho", CareersSite: "https://www.zoho.com/careers/" },
    { CompanyName: "Mindfire Solutions", CareersSite: "https://www.mindfiresolutions.com/people/career/" },
    { CompanyName: "ESSPL", CareersSite: "https://www.esspl.com/apply-job/" },
    { CompanyName: "CSM Tech", CareersSite: "https://www.csm.tech/explore-openings/" },
    { CompanyName: "247.ai", CareersSite: "https://careers.247.ai/search/" },
    { CompanyName: "Manpower Group", CareersSite: "https://www.manpowergroup.com/en/careers" },
    { CompanyName: "Salesforce", CareersSite: "https://www.salesforce.com/company/careers/" },
    { CompanyName: "Cisco", CareersSite: "https://www.cisco.com/c/en/us/about/careers.html" },
    { CompanyName: "HP", CareersSite: "https://jobs.hp.com/" },
    { CompanyName: "Uber", CareersSite: "https://www.uber.com/careers/" },
    { CompanyName: "UST", CareersSite: "https://www.ust.com/en/careers" },
    { CompanyName: "EY", CareersSite: "https://www.ey.com/en_in/careers" },
    { CompanyName: "Quest Global", CareersSite: "https://careers.quest-global.com/global/en" },
    { CompanyName: "Epam", CareersSite: "https://www.epam.com/careers" },
    { CompanyName: "NielsenIQ", CareersSite: "https://nielseniq.com/global/en/careers/" },
    { CompanyName: "PWC", CareersSite: "https://www.pwc.in/careers/job-search.html" },
    { CompanyName: "Virtusa", CareersSite: "https://www.virtusa.com/careers" },
    { CompanyName: "Siemens", CareersSite: "https://www.siemens.com/global/en/company/jobs.html" },
    { CompanyName: "Thomson Reuters", CareersSite: "https://www.thomsonreuters.com/en/careers.html" },
    { CompanyName: "Atlassian", CareersSite: "https://www.atlassian.com/company/careers" },
    { CompanyName: "Ericsson", CareersSite: "https://www.ericsson.com/en/careers" },
    { CompanyName: "HTC Global Services", CareersSite: "https://www.htcinc.com/join-us/" },
    { CompanyName: "Societe Generale", CareersSite: "https://careers.societegenerale.com/en/search?refinementList%5BjobFunction%5D%5B0%5D=IT%20%28Information%20Technology%29" },
    { CompanyName: "Goldman Sachs", CareersSite: "https://www.goldmansachs.com/careers" },
    { CompanyName: "Philips", CareersSite: "https://www.careers.philips.com/in/en" },
    { CompanyName: "Harman", CareersSite: "https://jobs.harman.com/" }
    
];

var currentPage = 0;
var recordsPerPage = 30;

function displayCompanies() {
    // Reset currentPage to 0 whenever this function is called (on every search input change)
    currentPage = 0;

    // Retrieve the search input value and filter companies
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var filteredCompanies = allCompanies.filter(function (company) {
        return company.CompanyName.toLowerCase().includes(searchInput);
    });

    // Paginate the filtered companies
    var start = currentPage * recordsPerPage;
    var pagedCompanies = filteredCompanies.slice(start, start + recordsPerPage);

    // Group into sub-containers of 10 records each
    var groupedCompanies = [];
    for (var i = 0; i < pagedCompanies.length; i += 10) {
        groupedCompanies.push(pagedCompanies.slice(i, i + 10));
    }

    var flexContainer = document.querySelector('.flex-container');
    flexContainer.innerHTML = ''; // Clear current items

    // Render each sub-container and the records inside
    groupedCompanies.forEach(function (group) {
        var subContainer = document.createElement('div');
        subContainer.className = 'sub-container';

        var table = document.createElement('table');
        table.className = 'company-table';

        var thead = document.createElement('thead');
        thead.innerHTML = '<tr><th>Company Name</th><th>Careers Site</th></tr>';
        table.appendChild(thead);

        var tbody = document.createElement('tbody');
        group.forEach(function (company) {
            var row = document.createElement('tr');
            row.innerHTML = '<td>' + company.CompanyName + '</td>' +
                '<td><a href="' + company.CareersSite + '" target="_blank">Visit Careers</a></td>';
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        subContainer.appendChild(table);
        flexContainer.appendChild(subContainer);
    });

    updatePagination(filteredCompanies.length);
}

// Function to update pagination controls
function updatePagination(totalRecords) {
    document.getElementById('lblPage').innerText = 'Page ' + (currentPage + 1) + ' of ' + Math.ceil(totalRecords / recordsPerPage);
    document.getElementById('btnPrevious').disabled = currentPage === 0;
    document.getElementById('btnNext').disabled = (currentPage + 1) * recordsPerPage >= totalRecords;
}

// Function to handle previous page navigation
function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        displayCurrentPageCompanies();
    }
}

// Function to handle next page navigation
function nextPage() {
    currentPage++;
    displayCurrentPageCompanies();
}

// Display only the current page companies (when navigating pagination)
function displayCurrentPageCompanies() {
    // Retrieve the search input value and filter companies
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var filteredCompanies = allCompanies.filter(function (company) {
        return company.CompanyName.toLowerCase().includes(searchInput);
    });

    // Paginate the filtered companies based on the current page
    var start = currentPage * recordsPerPage;
    var pagedCompanies = filteredCompanies.slice(start, start + recordsPerPage);

    // Group into sub-containers of 10 records each
    var groupedCompanies = [];
    for (var i = 0; i < pagedCompanies.length; i += 10) {
        groupedCompanies.push(pagedCompanies.slice(i, i + 10));
    }

    var flexContainer = document.querySelector('.flex-container');
    flexContainer.innerHTML = ''; // Clear current items

    // Render each sub-container and the records inside
    groupedCompanies.forEach(function (group) {
        var subContainer = document.createElement('div');
        subContainer.className = 'sub-container';

        var table = document.createElement('table');
        table.className = 'company-table';

        var thead = document.createElement('thead');
        thead.innerHTML = '<tr><th>Company Name</th><th>Careers Site</th></tr>';
        table.appendChild(thead);

        var tbody = document.createElement('tbody');
        group.forEach(function (company) {
            var row = document.createElement('tr');
            row.innerHTML = '<td>' + company.CompanyName + '</td>' +
                '<td><a href="' + company.CareersSite + '" target="_blank">Visit Careers</a></td>';
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        subContainer.appendChild(table);
        flexContainer.appendChild(subContainer);
    });

    updatePagination(filteredCompanies.length);
}

// Initialize the display on page load
window.onload = function () {
    displayCompanies();
};