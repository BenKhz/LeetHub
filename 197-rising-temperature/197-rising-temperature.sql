# Neat trick creating 2 aliases to the same table, in order to compare it to itself easily
SELECT Today.id FROM Weather Today, Weather Yesterday
WHERE DATEDIFF(Today.recordDate, Yesterday.recordDate) = 1
AND Today.temperature > Yesterday.temperature