export const exportToCSV = (data, filename) => {
    const headers = [
      "Email", "First Name", "Last Name", "Country", "Message", "Domain", "Gender", "Mobile No.", 
      "College", "Apply Date", "Start Date", "End Date"
    ];

    const csvContent = [
      headers.join(","),
      ...data.map(user => [
        user.email,
        user.firstName,
        user.lastName,
        user.country,
        user.message,
        user.internshipDomain,
        user.gender,
        user.phone,
        user.college,
        user.appliedDate,
        user.internshipStartingDate,
        user.internshipEndingDate
      ].join(",")) 
    ].join("\n"); 
  
    const encodedUri = encodeURI("data:text/csv;charset=utf-8," + csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
  };
