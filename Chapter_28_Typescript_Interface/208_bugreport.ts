interface bugreport{
 bugid: number;
    title: string;
    severity: string;
   stepstoreproduce: string; }
    const bugreport1: bugreport = {
        bugid: 1,
        title: "Bug in login page",
        severity: "high",
        stepstoreproduce: "1. open login page 2. enter username and password ",}
        console.log("Bug ID:", bugreport1.bugid);