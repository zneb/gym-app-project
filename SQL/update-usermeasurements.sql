update users
set weight = ${weight.toFixed(1) || "NULL"}, height = ${height.toFixed(1) || "NULL"}
where sessionid = '${sessionid}';