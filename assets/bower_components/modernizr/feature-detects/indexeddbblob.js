/*!
{
  "name": "IndexedDB Blob",
  "property": "indexeddbblob"
}
!*/
define(["Modernizr","addTest","prefixed","test/indexeddb"],function(A,e,t){A.addAsyncTest(function(){var n,i,o,r="detect-blob-support",w=!1;try{n=t("indexedDB",window)}catch(d){}if(!A.indexeddb||!A.indexeddb.deletedatabase)return!1;try{n.deleteDatabase(r).onsuccess=function(){i=n.open(r,1),i.onupgradeneeded=function(){i.result.createObjectStore("store")},i.onsuccess=function(){o=i.result;try{o.transaction("store","readwrite").objectStore("store").put(new Blob,"key"),w=!0}catch(A){w=!1}finally{e("indexeddbblob",w),o.close(),n.deleteDatabase(r)}}}}catch(d){e("indexeddbblob",!1)}})});