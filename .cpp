#include<bits/stdc++.h>
using namespace std;

int sortCheck(int arr[], int start, int end){
  if(start+1==end)
    return 1;
  int mid = (start+end)/2;
  int h1 = sortCheck(arr,start,mid);
  int h2 = sortCheck(arr,mid,end);
  if(h1==h2 && h1==(end-start)/2 && arr[mid-1]<=arr[mid])
    return end-start;
  return max(h1,h2);
}

int main(){
  int test;
  cin>>test;

  while(test--){
    int n;
    cin>>n;

    int arr[n];

    for(int i=0; i<n;i++)
      cin>>arr[i];

    cout<<sortCheck(arr,0,n)<<endl;
  }
}