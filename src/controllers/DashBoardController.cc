#include "DashBoardController.h"

void DashBoardController::asyncHandleHttpRequest(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback)
{
    // write your application logic here
    auto resp = HttpResponse::newHttpResponse();
    resp->setStatusCode(k200OK);
    resp->setContentTypeCode(CT_TEXT_HTML);
    resp->setBody(""
		   "<table>"
  "<tr>"
    "<th>Company</th>"
    "<th>Contact</th>"
    "<th>Country</th>"
  "</tr>"
  "<tr>"
    "<td>Alfreds Futterkiste</td>"
    "<td>Maria Anders</td>"
    "<td>Germany</td>"
  "</tr>"
  "<tr>"
    "<td>Centro comercial Moctezuma</td>"
    "<td>Francisco Chang</td>"
    "<td>Mexico</td>"
  "</tr>"
"</table>"
		    "");
    callback(resp);
}
