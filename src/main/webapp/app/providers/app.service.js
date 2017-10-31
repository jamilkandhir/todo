"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var AppService = (function () {
    function AppService(http) {
        this.http = http;
        console.log("Application Service Started");
    }
    /**
        * getTodos
        */
    AppService.prototype.getTodos = function () {
        return this.http.get('/assessment/todos').map(function (res) {
            return res.json();
        });
    };
    /**
    * getTodos
    */
    AppService.prototype.removeTodo = function (data) {
        return this.http.post('/assessment/delete', data).map(function (res) {
            return res.json();
        });
    };
    /**
     * saveTodoService
     */
    AppService.prototype.saveTodoService = function (type, viewData) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var data = viewData;
        if (type != 'save') {
            if (data["completed"] == true) {
                data["completed"] = false;
            }
            else {
                data["completed"] = true;
            }
        }
        return this.http.post('/assessment/save', data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2phbWlsYWhtZWQvZ2l0L3RvZG8vc3JjL21haW4vd2ViYXBwLyIsInNvdXJjZXMiOlsic3JjL21haW4vd2ViYXBwL2FwcC9wcm92aWRlcnMvYXBwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFJcEQ7SUFHSSxvQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDSjs7VUFFTTtJQUNJLDZCQUFRLEdBQWY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFhO1lBQ3BELE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUE7O01BRUU7SUFDSSwrQkFBVSxHQUFqQixVQUFrQixJQUFTO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFhO1lBQzVELE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxvQ0FBZSxHQUF0QixVQUF1QixJQUFTLEVBQUUsUUFBYztRQUMzQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsSUFBSSxJQUFJLEdBQUUsUUFBUSxDQUFDO1FBRW5CLEVBQUUsQ0FBQSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ2YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDOUIsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDN0IsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUMsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQzdELEdBQUcsQ0FBQyxVQUFDLEdBQVk7WUFDZixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQTdDTDtRQUFDLGlCQUFVLEVBQUU7O2tCQUFBO0lBZ0RiLGlCQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQztBQS9DWSxrQkFBVSxhQStDdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwLFJlc3BvbnNlLEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcclxuICAgIFxyXG4gICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXBwbGljYXRpb24gU2VydmljZSBTdGFydGVkXCIpOyAgICAgICAgXHJcbiAgICB9XHJcbiAvKipcclxuICAgICAqIGdldFRvZG9zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRUb2RvcygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXNzZXNzbWVudC90b2RvcycpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICAvKipcclxuICAgICAqIGdldFRvZG9zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmVUb2RvKGRhdGE6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXNzZXNzbWVudC9kZWxldGUnLCBkYXRhKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNhdmVUb2RvU2VydmljZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2F2ZVRvZG9TZXJ2aWNlKHR5cGU6IGFueSwgdmlld0RhdGE/OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7IFxyXG4gICAgICAgIGxldCBkYXRhID12aWV3RGF0YTtcclxuXHJcbiAgICAgICAgaWYodHlwZSAhPSAnc2F2ZScpe1xyXG4gICAgICAgICAgICBpZihkYXRhW1wiY29tcGxldGVkXCJdID09IHRydWUgKXtcclxuICAgICAgICAgICAgICAgIGRhdGFbXCJjb21wbGV0ZWRcIl0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkYXRhW1wiY29tcGxldGVkXCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hc3Nlc3NtZW50L3NhdmUnLGRhdGEsIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgICAgICAgLm1hcCgocmVzOlJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIFxyXG59XHJcbiJdfQ==