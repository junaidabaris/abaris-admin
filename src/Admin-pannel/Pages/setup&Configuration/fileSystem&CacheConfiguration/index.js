import CacheSessionDriver from "../../../Components/setup&Configuration/fileCacheConfiguration/CacheSessionDriver";
import RedisConfiguration from "../../../Components/setup&Configuration/fileCacheConfiguration/RedisConfiguration";
import S3FileSystemActivation from "../../../Components/setup&Configuration/fileCacheConfiguration/S3FileSystemActivation";
import S3FileSystemCredential from "../../../Components/setup&Configuration/fileCacheConfiguration/S3FileSystemCredential";

function FileSystemCacheConfigurationPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <S3FileSystemCredential />
                        <S3FileSystemActivation />
                    </div>
                    <div className="row">
                        <CacheSessionDriver />
                        <RedisConfiguration />
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
            {/* <FileSystemCacheConfiguration /> */}
        </>
    )
}
export default FileSystemCacheConfigurationPage;